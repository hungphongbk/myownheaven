import React from "react"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"
import styled from "styled-components"
import { postGridGutter } from "../../utils/consts"

const Wrapper = styled.div`
  position: relative;
  padding: ${postGridGutter * 1.3}rem ${postGridGutter}rem
    ${postGridGutter * 3}rem;
  border-radius: ${(postGridGutter * 2) / 3}rem;
  &:hover {
    background-color: #2d2d2d;
  }
`

const PostItemOne = ({ post: node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <Wrapper>
      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          {title}
        </h3>
      </Link>

      <small>{node.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </Wrapper>
  )
}

export default PostItemOne
