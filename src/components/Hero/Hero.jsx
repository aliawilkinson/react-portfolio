import React from 'react'
import css from './Hero.module.scss'
import { calculateWholeYears } from '../../utils/data'
import { motion } from 'framer-motion'
import { staggerChildren, fadeIn } from "../../utils/motion"

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.025 }}
                className={`innerWidth ${css.container}`}>
                <span className="anchor" id="hero" />

                {/* top-left: headline */}
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className={css.headline}>
                    <h1 className='primaryText'>
                        Hi, I'm Alia. <br />
                        I set the architecture <br />
                        and get it shipped.
                    </h1>
                </motion.div>

                {/* center: portrait - spans both grid rows on desktop */}
                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className={css.person}>
                    <img src="./rock-portrait.jpg" alt="Alia Wilkinson, green hair, posing under a giant boulder" />
                </motion.div>

                {/* top-right: tagline */}
                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={css.tagline}>
                    <span className='secondaryText'>
                        Principal Engineer on the Architecture team at Transamerica.
                        I set technical direction, make the case for it, and work
                        with platform and DevOps to deliver it. Remote from Southern California.
                    </span>
                </motion.div>

                {/* bottom-left: years experience */}
                <motion.div
                    variants={fadeIn("right", "tween", 0.4, 1)}
                    className={css.experience}>
                    <div className="primaryText">{calculateWholeYears()}</div>
                    <div className="secondaryText">
                        <div>Years in</div>
                        <div>engineering</div>
                    </div>
                </motion.div>

                {/* bottom-right: cert badge */}
                <motion.div
                    variants={fadeIn("left", "tween", 0.4, 1)}
                    className={css.certificate}>
                    <img src='./aws-sol-arch.png' alt="AWS Solutions Architect badge" />
                    <span>AWS SOLUTIONS ARCHITECT</span>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Hero
