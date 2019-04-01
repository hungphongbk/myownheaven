import React from "react"
import Link from "gatsby-link"

import { rhythm, scale } from "../utils/typography"
import styles from "./layout.module.scss"
import { graphql, StaticQuery } from "gatsby"

class Layout extends React.Component {
  renderHeader = () => (
    <StaticQuery
      query={query}
      render={data => {
        const headerStyle = {
          backgroundImage: `url(${data.banner.childImageSharp.fluid.srcWebp})`,
        }

        return (
          <header style={headerStyle}>
            <div className={styles.Container}>ahihi</div>
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
          <div className={styles.Container}>{this.props.children}</div>
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
  }
`

export default Layout
