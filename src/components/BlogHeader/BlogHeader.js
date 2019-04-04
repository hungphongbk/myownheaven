import React from "react"
import styles from "../layout.module.scss"
import Link from "gatsby-link"
import { graphql, StaticQuery } from "gatsby"
import classnames from "classnames"
import { rhythm, scale } from "../../utils/typography"

const BlogHeader = ({ blog = null }) => (
  <StaticQuery
    query={query}
    render={({ banner, site }) => {
      const headerStyle = {
        backgroundImage: `url(${banner.childImageSharp.fluid.srcWebp})`,
      }

      return (
        <header
          style={headerStyle}
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
        </header>
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
