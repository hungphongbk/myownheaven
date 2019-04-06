import React from "react"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  postGridGutter,
  postGridGutterLarger,
  postGridGutterSmaller,
} from "../../utils/consts"
import styles from "./PostItemOne.module.scss"

const Wrapper = styled.article`
  position: relative;
  padding: ${postGridGutterLarger}rem ${postGridGutter}rem
    ${postGridGutter * 3}rem;
  border-radius: ${(postGridGutter * 2) / 3}rem;
  &:hover {
    background-color: #2d2d2d;
  }
  h3 {
    display: inline-block;
    margin-top: ${postGridGutterSmaller}rem;
    margin-bottom: ${postGridGutterLarger}rem;
  }
`

const PostItemOne = ({ post: node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <Wrapper>
      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
        <h3>{title}</h3>
      </Link>

      <div className={styles.Wrapper}>
        {node.frontmatter.image && (
          <img
            src={node.frontmatter.image.childImageSharp.resize.src}
            alt={node.frontmatter.description || node.frontmatter.title}
          />
        )}
        <div>
          <small>{node.frontmatter.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default PostItemOne
