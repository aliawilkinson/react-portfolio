import { useState, useCallback, useEffect } from 'react'
import { callGemini } from '../services/geminiClient'
import { generateInterpretation } from '../services/interpretationService'
import ReadingMemoryService from '../services/readingMemoryService'

export const CONVERSATION_STORAGE_KEY = 'tarot_ui_conversation_v1'
const MAX_PERSISTED_TURNS = 20

const restoreConversation = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(CONVERSATION_STORAGE_KEY) || '[]')
    return Array.isArray(stored) ? stored.slice(-MAX_PERSISTED_TURNS) : []
  } catch {
    return []
  }
}

const getTurnInterpretationText = turn => {
  if (turn.interpretation) {
    return [
      turn.interpretation.summary,
      turn.interpretation.detailed,
      turn.interpretation.themes,
      turn.interpretation.reflectionQuestions,
      turn.interpretation.actionableInsights
    ].filter(Boolean).join(' ')
  }

  const fallback = turn.fallbackInterpretation
  return fallback ? [fallback.summary, fallback.connections].filter(Boolean).join(' ') : ''
}

const useConversation = ({ resetAndDraw }) => {
  const [turns, setTurns] = useState(restoreConversation)
  const [currentCards, setCurrentCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [pendingQuestion, setPendingQuestion] = useState(null)
  const [pendingPreset, setPendingPreset] = useState(null)
  const [memoryService] = useState(() => {
    const service = new ReadingMemoryService()
    if (service.turns.length === 0) {
      for (const turn of restoreConversation()) {
        service.addTurn('user', turn.question)
        const interpretationText = getTurnInterpretationText(turn)
        if (interpretationText) service.addTurn('model', interpretationText)
      }
    }
    return service
  })

  useEffect(() => {
    try {
      localStorage.setItem(CONVERSATION_STORAGE_KEY, JSON.stringify(turns.slice(-MAX_PERSISTED_TURNS)))
    } catch {
      // Storage may be unavailable or full; keep the in-memory conversation working.
    }
  }, [turns])

  const submitQuestion = useCallback(async (questionText, spreadPreset) => {
    if (!questionText || questionText.trim() === '') return

    setError(null)
    setIsLoading(true)
    setPendingQuestion(questionText)
    setPendingPreset(spreadPreset)

    // Draw cards using existing deck logic
    const cards = resetAndDraw(spreadPreset.cardCount)
    setCurrentCards(cards)

    // Add user turn to memory service
    memoryService.addTurn('user', questionText)

    // Build history for multi-turn conversation
    const history = memoryService.buildGeminiHistory()

    try {
      const interpretation = await callGemini({
        question: questionText,
        cards: cards.map(c => ({ name: c.card.name, reversed: c.isReversed })),
        spreadType: spreadPreset.name,
        history
      })

      // Build the full interpretation text for memory service
      const interpretationText = [
        interpretation.summary,
        interpretation.detailed,
        interpretation.themes,
        interpretation.reflectionQuestions,
        interpretation.actionableInsights
      ].filter(Boolean).join(' ')

      // Add model turn to memory service
      memoryService.addTurn('model', interpretationText)

      // Save reading summary
      memoryService.saveReading({
        question: questionText,
        cards: cards.map(c => ({ name: c.card.name, reversed: c.isReversed })),
        interpretationText
      })

      const turn = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        question: questionText,
        cards,
        spreadPreset,
        interpretation
      }

      setTurns(prev => [...prev, turn])
      setCurrentCards([])
      setPendingQuestion(null)
      setPendingPreset(null)
    } catch (err) {
      // Remove the user turn that was added before the failed call
      memoryService.turns.pop()
      memoryService._persistToStorage()

      // Generate fallback interpretation and add turn to history anyway
      const fallback = generateInterpretation(cards, questionText, spreadPreset)
      const turn = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        question: questionText,
        cards,
        spreadPreset,
        interpretation: null,
        fallbackInterpretation: fallback,
        error: err.message || 'The oracle is sleeping.'
      }

      setTurns(prev => [...prev, turn])
      setCurrentCards([])
      setPendingQuestion(null)
      setPendingPreset(null)
      setError(null)
    } finally {
      setIsLoading(false)
    }
  }, [resetAndDraw, memoryService])

  const retryLastInterpretation = useCallback(async () => {
    if (!pendingQuestion || !pendingPreset || currentCards.length === 0) return

    setError(null)
    setIsLoading(true)

    // Add user turn back for retry
    memoryService.addTurn('user', pendingQuestion)

    // Build history for multi-turn conversation
    const history = memoryService.buildGeminiHistory()

    try {
      const interpretation = await callGemini({
        question: pendingQuestion,
        cards: currentCards.map(c => ({ name: c.card.name, reversed: c.isReversed })),
        spreadType: pendingPreset.name,
        history
      })

      // Build the full interpretation text for memory service
      const interpretationText = [
        interpretation.summary,
        interpretation.detailed,
        interpretation.themes,
        interpretation.reflectionQuestions,
        interpretation.actionableInsights
      ].filter(Boolean).join(' ')

      // Add model turn to memory service
      memoryService.addTurn('model', interpretationText)

      // Save reading summary
      memoryService.saveReading({
        question: pendingQuestion,
        cards: currentCards.map(c => ({ name: c.card.name, reversed: c.isReversed })),
        interpretationText
      })

      const turn = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        question: pendingQuestion,
        cards: currentCards,
        spreadPreset: pendingPreset,
        interpretation
      }

      setTurns(prev => [...prev, turn])
      setCurrentCards([])
      setPendingQuestion(null)
      setPendingPreset(null)
    } catch (err) {
      // Remove the user turn that was added before the failed call
      memoryService.turns.pop()
      memoryService._persistToStorage()
      setError(err.message || 'The oracle has refused to awaken. Feel free to do a manual spread in the core tarot app.')
    } finally {
      setIsLoading(false)
    }
  }, [pendingQuestion, pendingPreset, currentCards, memoryService])

  const clearConversation = useCallback(() => {
    setTurns([])
    setCurrentCards([])
    setPendingQuestion(null)
    setPendingPreset(null)
    setError(null)
    memoryService.clear()
    try { localStorage.removeItem(CONVERSATION_STORAGE_KEY) } catch {}
  }, [memoryService])

  return {
    turns,
    currentCards,
    isLoading,
    error,
    pendingQuestion,
    submitQuestion,
    retryLastInterpretation,
    clearConversation
  }
}

export default useConversation
