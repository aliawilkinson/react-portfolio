import React from "react"
import { motion } from "framer-motion"
import css from "./InfoPost.module.scss"
import { staggerChildren } from "../../utils/motion"
import { content } from "../../utils/posts"
import Parser from 'html-react-parser'
import SEO from "../SEO/SEO"
import { seoData } from "../../utils/seoData"
import { Link } from 'react-router-dom'
import { caseStudies } from '../../utils/data'

const InfoPost = ({ post }) => {
  const metadata = seoData[post] || {}
  const isCaseStudy = caseStudies.some(study => study.slug === post)

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      animate="show"
      className={`${css.wrapper}`}
    >
      <SEO
        title={metadata.title}
        description={metadata.description}
        url={metadata.url}
        image={metadata.image}
      />
      <div className={`innerWidth ${css.container}`}>
        {isCaseStudy ? <Link to="/case-studies" className={css.backToCaseStudies}>← Back to Case Studies</Link> : null}
        <span className="anchor" id="infoPost" />
        <h1 className="post-title">{content[post].title}</h1>
        <img src={content[post].imgSrc} alt={content[post].title} />
        <div className="post-content">
          {Parser(content[post].post)}
        </div>
      </div>
    </motion.section>
  );
};

export default InfoPost;
