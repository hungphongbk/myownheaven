import React from "react"
import Link from "gatsby-link"

import { rhythm, scale } from "../utils/typography"
import "../sass/index.scss"
import styles from "./layout.module.scss"
import { graphql, StaticQuery } from "gatsby"

class Layout extends React.Component {
  renderHeader = () => (
    <StaticQuery
      query={query}
      render={({banner, site}) => {
        const headerStyle = {
          backgroundImage: `url(${banner.childImageSharp.fluid.srcWebp})`,
        }

        return (
          <header style={headerStyle}>
            <div className={styles.Container}>
              <h1>{site.siteMetadata.author}</h1>
              <h3><i>{site.siteMetadata.description}</i></h3>
            </div>
          </header>
        )
      }}
    />
  )
  render() {
    // const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className={styles.Layout}>
        {this.renderHeader()}
        <main>
          <div className={`${styles.Container} mt20`}>{this.props.children}</div>
        </main>
      </div>
    )
  }
}

export const query = graphql`
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

export default Layout
