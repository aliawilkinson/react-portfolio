import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import css from './ProjectPortal.module.scss'

const TRANSITION_MS = 680

const ProjectPortal = ({ to, image, color = '#573b78', className = '', children, label }) => {
  const portalRef = useRef(null)
  const navigate = useNavigate()
  const [transition, setTransition] = useState(null)

  useEffect(() => {
    if (!transition) return undefined
    const timer = window.setTimeout(() => {
      if (/^https?:/.test(to)) window.location.assign(to)
      else navigate(to)
    }, TRANSITION_MS)
    return () => window.clearTimeout(timer)
  }, [navigate, to, transition])

  const handleClick = event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (/^https?:/.test(to)) window.location.assign(to)
      else navigate(to)
      return
    }

    const rect = portalRef.current.getBoundingClientRect()
    setTransition({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    })
  }

  return (
    <>
      <a
        ref={portalRef}
        href={to}
        className={`${css.portalLink} ${className}`}
        onClick={handleClick}
        aria-label={label}
        style={{ '--portal-color': color }}
      >
        {children}
      </a>
      {transition ? (
        <div
          className={css.portalTransition}
          style={{
            '--portal-left': `${transition.left}px`,
            '--portal-top': `${transition.top}px`,
            '--portal-width': `${transition.width}px`,
            '--portal-height': `${transition.height}px`,
            '--portal-color': color,
            '--portal-image': image ? `url("${image}")` : 'none'
          }}
          aria-hidden="true"
        >
          <span />
        </div>
      ) : null}
    </>
  )
}

export default ProjectPortal
