import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import css from './Tarot.module.scss'
import useTarotDeck from './hooks/useTarotDeck'
import useConversation from './hooks/useConversation'
import { SPREAD_PRESETS } from './data/spreadPresets'
import Spread from './Spread'
import ConversationTurn from './ConversationTurn'
import ConversationInput from './ConversationInput'
import LoadingIndicator from './LoadingIndicator'
import tarotCover from './assets/tarot-cover.png'
import { analytics, ANALYTICS_EVENTS } from '../../utils/analytics'

const Tarot = () => {
  const { resetAndDraw } = useTarotDeck()
  const { turns, currentCards, isLoading, pendingQuestion, submitQuestion } = useConversation({ resetAndDraw })
  const [pendingPreset, setPendingPreset] = useState(SPREAD_PRESETS.three)
  const messagesRef = useRef(null)

  useEffect(() => {
    const shell = document.body.querySelector(`.${css.tarotApp}`)?.parentElement
    let themeColor = document.head.querySelector('meta[name="theme-color"]')
    const createdThemeColor = !themeColor
    const previousThemeColor = themeColor?.content
    if (!themeColor) {
      themeColor = document.createElement('meta')
      themeColor.name = 'theme-color'
      document.head.appendChild(themeColor)
    }
    themeColor.content = '#05020d'
    document.documentElement.classList.add(css.tarotDocument)
    document.body.classList.add(css.tarotDocument)
    shell?.classList.add(css.tarotShell)

    return () => {
      document.documentElement.classList.remove(css.tarotDocument)
      document.body.classList.remove(css.tarotDocument)
      shell?.classList.remove(css.tarotShell)
      if (createdThemeColor) themeColor.remove()
      else themeColor.content = previousThemeColor
    }
  }, [])

  useEffect(() => {
    const container = messagesRef.current
    if (container) container.scrollTo({ top: container.scrollHeight, behavior: turns.length ? 'smooth' : 'auto' })
  }, [turns.length, currentCards.length, isLoading])

  const handleSubmit = (question, presetKey) => {
    const preset = SPREAD_PRESETS[presetKey] || SPREAD_PRESETS.three
    setPendingPreset(preset)
    analytics.trackEvent(turns.length ? ANALYTICS_EVENTS.FOLLOW_UP_QUESTION_ASKED : ANALYTICS_EVENTS.TAROT_READING_STARTED)
    submitQuestion(question, preset)
  }

  return (
    <main className={css.tarotApp}>
      <div className={css.cosmos} aria-hidden="true"><i /><i /><i /></div>
      <header className={css.oracleHeader}>
        <Link to="/" className={css.backToPortfolio} aria-label="Back to portfolio">
          <span aria-hidden="true">←</span><b>Back to portfolio</b>
        </Link>
        <div className={css.oracleBrand}>
          <div className={css.brandMark} aria-hidden="true">✦</div>
          <div><p className={css.eyebrow}>The Infinity Oracle</p><h1>Ask the mirror</h1></div>
        </div>
        <p className={css.headerHint}>A reflective tarot conversation</p>
      </header>
      <section className={css.convMessages} ref={messagesRef} aria-live="polite" aria-busy={isLoading}>
        {turns.length === 0 && !isLoading && (
          <div className={css.convEmpty}>
            <div className={css.portal} aria-hidden="true"><img src={tarotCover} alt="" /></div>
            <p className={css.welcomeTitle}>Begin with what is alive in you.</p>
            <p className={css.convEmptySub}>Choose a spread, ask a question, and use the cards as a lens for reflection.</p>
          </div>
        )}
        {turns.map(turn => <ConversationTurn key={turn.id} turn={turn} />)}
        {currentCards.length > 0 && isLoading && (
          <div className={css.convTurn}>
            <div className={css.convTurnQuestion}><span>You asked</span><p>{pendingQuestion}</p></div>
            <Spread drawnCards={currentCards} spreadPreset={pendingPreset} />
            <LoadingIndicator />
          </div>
        )}
      </section>
      <ConversationInput onSubmit={handleSubmit} disabled={isLoading} />
    </main>
  )
}

export default Tarot
