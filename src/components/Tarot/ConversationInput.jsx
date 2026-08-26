import { useState, useRef, useCallback } from 'react'
import css from './Tarot.module.scss'
import { SPREAD_PRESETS } from './data/spreadPresets'

const MAX_ROWS = 6

const ConversationInput = ({ onSubmit, disabled }) => {
  const [text, setText] = useState('')
  const [preset, setPreset] = useState('three')
  const textareaRef = useRef(null)

  const handleSubmit = () => {
    if (text.trim() === '' || disabled) return
    onSubmit(text.trim(), preset)
    setText('')
    // Reset height after submit
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (!disabled) handleSubmit()
    }
  }

  // Auto-expand textarea
  const handleInput = useCallback((e) => {
    setText(e.target.value)
    const el = e.target
    el.style.height = 'auto'
    const lineHeight = parseInt(getComputedStyle(el).lineHeight) || 20
    const maxHeight = lineHeight * MAX_ROWS
    el.style.height = Math.min(el.scrollHeight, maxHeight) + 'px'
  }, [])

  return (
    <div className={css.convInputBar}>
      <div className={css.spreadPicker}>
        <label htmlFor="tarot-spread">Spread</label>
        <select id="tarot-spread" value={preset} onChange={e => setPreset(e.target.value)} disabled={disabled}>
          {Object.entries(SPREAD_PRESETS).map(([key, spread]) => <option key={key} value={key}>{spread.name} · {spread.cardCount} card{spread.cardCount > 1 ? 's' : ''}</option>)}
        </select>
      </div>
      <div className={css.convInput}>
        <textarea
          ref={textareaRef}
          placeholder="Ask a question for your tarot reading..."
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-label="Tarot question input"
          data-clarity-mask="true"
          rows={1}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || text.trim() === ''}
          aria-label="Submit question"
        >
          <span>Ask the oracle</span><b aria-hidden="true">↑</b>
        </button>
      </div>
    </div>
  )
}

export default ConversationInput
