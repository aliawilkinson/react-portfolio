import { useState } from "react"
import { motion } from "framer-motion"
import css from "./CaseStudies.module.scss"
import { fadeIn, textVariant } from "../../utils/motion"
import { caseStudies } from '../../utils/data'
import ProjectPortal from '../ProjectPortal/ProjectPortal'

const CaseStudyCard = ({ study }) => {
  const [imgFailed, setImgFailed] = useState(false)

  if (imgFailed || !study.imgSrc) {
    return (
      <div className={css.fallbackCard} style={{ background: study.bg }}>
        <span>{study.alt}</span>
      </div>
    )
  }

  return (
    <img
      src={study.imgSrc}
      alt={study.alt}
      onError={() => setImgFailed(true)}
    />
  )
}

const CaseStudies = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.10 }}
      className={`paddings ${css.wrapper} bg-primary`}
    >
      <span className="anchor" id="CaseStudies" />

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(0.1)} className={`flexCenter ${css.heading}`}>
          <div>
            <h2 className="primaryText">Case Studies</h2>
            <p className={css.subheading}>The longer stories: what the problem was, what I built, and how it turned out.</p>
          </div>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          {caseStudies.map((study, i) => (
            <ProjectPortal
              to={`/${study.slug}`}
              image={study.imgSrc}
              color={study.bg}
              className={css.caseStudyLink}
              label={`Open case study: ${study.alt}`}
              preview={
                <motion.div variants={fadeIn("up", "tween", 0.15 + i * 0.06, 0.45, 32)}>
                  <CaseStudyCard study={study} />
                </motion.div>
              }
              key={study.slug}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
