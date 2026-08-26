import { useEffect, useRef, useState } from 'react'
import css from './Tarot.module.scss'
import SpreadCard from './SpreadCard'

const Spread = ({ drawnCards, spreadPreset }) => {
  const [activeCard, setActiveCard] = useState(null)
  const spreadRef = useRef(null)
  const isCeltic = spreadPreset?.cardCount === 10

  useEffect(() => {
    const dismiss = event => {
      if (event.key === 'Escape' || (event.type === 'pointerdown' && !spreadRef.current?.contains(event.target))) setActiveCard(null)
    }
    document.addEventListener('keydown', dismiss)
    document.addEventListener('pointerdown', dismiss)
    return () => {
      document.removeEventListener('keydown', dismiss)
      document.removeEventListener('pointerdown', dismiss)
    }
  }, [])

  return (
    <div ref={spreadRef} className={`${css.spread} ${isCeltic ? css.celticSpread : ''}`} aria-label={`${spreadPreset?.name || 'Tarot'} cards`}>
      {drawnCards.map((drawn, index) => (
        <SpreadCard
          key={`${drawn.card.name_short}-${index}`}
          card={drawn.card}
          isReversed={drawn.isReversed}
          label={spreadPreset?.labels?.[index] || null}
          positionDescription={spreadPreset?.descriptions?.[index] || null}
          index={index}
          isActive={activeCard === index}
          onActivate={() => setActiveCard(activeCard === index ? null : index)}
        />
      ))}
    </div>
  )
}

export default Spread
