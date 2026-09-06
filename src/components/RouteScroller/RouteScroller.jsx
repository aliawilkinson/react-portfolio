import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { caseStudies } from '../../utils/data'

const routeTargets = {
  '/': 'hero',
  '/hero': 'hero',
  '/expertise': 'expertise',
  '/case-studies': 'CaseStudies',
  '/projects': 'projects',
  '/testimonials': 'Testimonials',
  '/experience': 'experience',
  '/contact': 'footer',
  '/about': 'infoPost',
}

const RouteScroller = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const isCaseStudy = caseStudies.some(study => pathname === `/${study.slug}`)
    const targetId = routeTargets[pathname] || (isCaseStudy ? 'infoPost' : undefined)

    window.requestAnimationFrame(() => {
      if (!targetId || targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [pathname])

  return null
}

export default RouteScroller
