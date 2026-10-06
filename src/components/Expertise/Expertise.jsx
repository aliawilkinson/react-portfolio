import { projectExperience, whatIHelpWith } from '../../utils/data'
import css from './Expertise.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js'
import { calculateWholeYears } from '../../utils/data'

const metrics = [
    {
        value: '1,200+',
        label: 'components deployed in one automated release',
    },
    {
        value: '26',
        label: 'teams moved off manual deploys',
    },
]

const Expertise = () => {
    return (
        <section className={css.wrapper}>
            <a className="anchor" id="expertise"></a>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.10 }}
                className={`paddings yPaddings innerWidth ${css.container}`}>

                <motion.div
                    variants={textVariant(0.2)}
                    className={css.intro}>
                    <span className={css.eyebrow}>The short version</span>
                    <h2 className='primaryText'>What I Do</h2>
                    {whatIHelpWith.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                </motion.div>

                <div className={css.dashboard}>
                    <div className={css.dashboardBar}>
                        <span>Where the years went</span>
                        <div aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className={css.capabilities}>
                        {
                            projectExperience.map((exp, i) => {
                                return <motion.div variants={fadeIn("up", "tween", 0.2 + i * 0.08, 0.5, 24)} className={css.exp} key={exp.name}>
                                    <div className={css.expMarker} style={{ background: exp.bg }}>
                                        <span></span>
                                    </div>
                                    <div>
                                        <span>{exp.name}</span>
                                        <span>{calculateWholeYears(exp.date_started)}+ years</span>
                                    </div>
                                </motion.div>
                            })
                        }
                    </div>

                    <div className={css.stats}>
                        {metrics.map((metric) => (
                            <div className={css.stat} key={metric.label}>
                                <span>{metric.value}</span>
                                <span>{metric.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className={css.signalPanel}>
                        <span>Now: Principal Engineer, Transamerica</span>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Expertise
