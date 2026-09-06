import { useState } from "react"
import { motion } from "framer-motion"
import css from "./OtherProjects.module.scss"
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion"
import { projects } from '../../utils/data'
import ProjectPortal from '../ProjectPortal/ProjectPortal'

// Category display order
const CATEGORY_ORDER = ['Apps', 'Music', 'Art', 'Photography', 'Writing', 'Other']

const portfolioEntries = [
  ...projects.map(project => ({
    ...project,
    route: project.externalUrl || `/projects/${project.slug}`
  }))
]

const ProjectCard = ({ project }) => {
  const [imgFailed, setImgFailed] = useState(false)

  if (imgFailed || !project.imgSrc) {
    return (
      <div className={css.fallbackCard} style={{ background: project.bg }}>
        <span className={css.fallbackTitle}>{project.title}</span>
        <span className={css.fallbackSub}>{project.subtitle}</span>
      </div>
    )
  }

  return (
    <img
      className={css.cardImage}
      src={project.imgSrc}
      alt={project.title}
      style={{ objectFit: project.imageFit || 'cover', background: project.imageBackground || 'white' }}
      onError={() => setImgFailed(true)}
    />
  )
}

const OtherProjectsList = () => {
  // Group projects by category
  const groupedProjects = portfolioEntries.reduce((acc, project) => {
    const category = project.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(project)
    return acc
  }, {})

  // Get categories in display order, filtering out empty ones
  const orderedCategories = CATEGORY_ORDER.filter(cat => groupedProjects[cat]?.length > 0)

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      animate="show"
      className={`paddings ${css.wrapper}`}
    >
      <span className="anchor" id="projects" />
      <div className={`innerWidth ${css.container}`}>
        <motion.h1 variants={textVariant(0.2)} className="primaryText">Projects</motion.h1>
        <motion.p variants={fadeIn("up", "tween", 0.3, 0.6)} className={css.intro}>
          Open, play, visit, and explore. Each project is a working world you can step inside.
        </motion.p>

        {orderedCategories.map((category, catIndex) => (
          <motion.div 
            key={category} 
            variants={fadeIn("up", "tween", 0.4 + catIndex * 0.1, 0.6)}
            className={css.categorySection}
          >
            <h2 className={css.categoryHeading}>{category}</h2>
            <div className={css.projectGrid}>
              {groupedProjects[category].map((project, i) => {
                return (
                  <motion.div key={project.slug} variants={fadeIn("up", "tween", 0.5 + i * 0.1, 0.6)}>
                    <ProjectPortal
                      to={project.route}
                      newTab
                      image={project.imgSrc}
                      color={project.bg}
                      className={css.cardWrap}
                      label={`Enter ${project.title}`}
                      preview={<ProjectCard project={project} />}
                    >
                      <div className={css.cardLabel}>
                        <span>{project.title}</span>
                        <span>{project.subtitle}</span>
                      </div>
                    </ProjectPortal>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default OtherProjectsList
