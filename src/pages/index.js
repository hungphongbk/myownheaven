import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem/PostItem"
import PostGrid from "../components/PostGrid"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PostGrid columns={[1, 2, 2]}>
          {posts.map(({ node }) => (
            <PostItem key={node.fields.slug} itemType={1} post={node} />
          ))}
        </PostGrid>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                resize(
                  width: 200
                  height: 200
                  toFormat: WEBP
                  grayscale: true
                ) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
