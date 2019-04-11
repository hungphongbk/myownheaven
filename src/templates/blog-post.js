import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO, { makeMetaSpecs } from "../components/seo"
import { rhythm } from "../utils/typography"
import styles from "./blog-post.module.scss"
import RehypeReact from "rehype-react"
import {
  LyricTranslator,
  LyricTranslatorPanel,
} from "../components/LyricTranslator"

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    "lyric-translator": LyricTranslator,
    "lyric-translator-panel": LyricTranslatorPanel,
  },
}).Compiler

class BlogPostTemplate extends React.Component {
  render() {
    const { previous, next, category = null } = this.props.pageContext
    const post = Object.assign(
      {},
      this.props.data.markdownRemark,
      category && { category }
    )
    const { siteTitle, social } = this.props.data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={siteTitle} blog={post}>
        <SEO
          title={post.frontmatter.title}
          type={"article"}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image}
          otherMeta={makeMetaSpecs("article", [
            ["author", social.facebook],
            ["published_time", post.frontmatter.date],
            post.category && ["section", post.category.title],
          ])}
        />
        <div className={styles.BlogContentWrapper}>
          <article className={styles.BlogContent}>
            <div className={"mt20"}>{renderAst(post.htmlAst)}</div>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />

            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </article>
          <aside className={styles.BlogSidebar} />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        social {
          facebook
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 229)
      html
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fixed(width: 400, height: 400) {
              src
            }
          }
        }
      }
    }
  }
`
