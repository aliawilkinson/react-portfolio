import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import css from './ProjectPortal.module.scss'

const TRANSITION_MS = 680

const ProjectPortal = ({ to, image, color = '#573b78', className = '', preview, children, label, newTab = false }) => {
  const surfaceRef = useRef(null)
  const navigate = useNavigate()
  const [transition, setTransition] = useState(null)

  useEffect(() => {
    if (!transition) return undefined
    const timer = window.setTimeout(() => {
      if (newTab) {
        setTransition(null)
        return
      }
      if (/^https?:/.test(to)) window.location.assign(to)
      else navigate(to)
    }, TRANSITION_MS)
    return () => window.clearTimeout(timer)
  }, [navigate, newTab, to, transition])

  const handleClick = event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (newTab) return
      event.preventDefault()
      if (/^https?:/.test(to)) window.location.assign(to)
      else navigate(to)
      return
    }

    if (!newTab) event.preventDefault()

    const rect = surfaceRef.current.getBoundingClientRect()
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
        href={to}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className={`${css.portalLink} ${className}`}
        onClick={handleClick}
        aria-label={label}
        style={{ '--portal-color': color }}
      >
        <div ref={surfaceRef} className={css.portalSurface}>{preview}</div>
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
