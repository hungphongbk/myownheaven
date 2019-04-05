import React from "react"
import styles from "../layout.module.scss"
import Link from "gatsby-link"
import { graphql, StaticQuery } from "gatsby"
import classnames from "classnames"
import { rhythm, scale } from "../../utils/typography"
import styled from "styled-components"

const responsives = srcSet =>
    srcSet
      .split(",")
      .map((src, index) => {
        let [url, w] = src.trim().split(" "),
          rs = `background-image: url(${url});`
        if (index > 0)
          rs = `@media (min-width: ${w.replace(/w/, "px")}){
        ${rs}
      }`
        return rs
      })
      .join(""),
  Header = styled.header`
    ${props => responsives(props.srcSet)}
  `

const BlogHeader = ({ blog = null }) => (
  <StaticQuery
    query={query}
    render={({ banner, site }) => {
      return (
        <Header
          srcSet={banner.childImageSharp.fluid.srcSetWebp}
          className={classnames(blog && styles.WithBlogHeader)}
        >
          <div className={styles.Container} style={{ height: "100%" }}>
            <Link className={styles.ToHome} to={"/"}>
              <h1>{site.siteMetadata.author}</h1>
              <h3>
                <i>{site.siteMetadata.description}</i>
              </h3>
            </Link>
            {blog && (
              <div className={styles.BlogPostHeader}>
                <h1>{blog.frontmatter.title}</h1>
                <p
                  style={{
                    ...scale(-1 / 12),
                    display: `block`,
                    marginBottom: rhythm(0.15),
                    marginTop: rhythm(0),
                    fontFamily: "'Vollkorn',serif",
                  }}
                >
                  {blog.frontmatter.date} by {site.siteMetadata.author}
                  {blog.category && (
                    <>
                      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      <strong>{blog.category.title.toUpperCase()}</strong>
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </Header>
      )
    }}
  />
)

const query = graphql`
  query {
    banner: file(absolutePath: { regex: "/banner.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`

export default BlogHeader
