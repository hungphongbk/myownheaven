import React from "react"

import "../sass/index.scss"
import styles from "./layout.module.scss"
import BlogHeader from "./BlogHeader/BlogHeader"

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className={styles.Layout}>
        <BlogHeader blog={this.props.blog} />
        <main>
          <div className={`${styles.Container} mt20`}>
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

Layout.defaultProps = {
  blog: null,
}

export default Layout
