import React from "react"

import "../sass/index.scss"
import styles from "./layout.module.scss"
import BlogHeader from "./BlogHeader/BlogHeader"
import classnames from "classnames"

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        className={classnames(
          styles.Layout,
          this.props.blog && styles.HasBlogPost
        )}
      >
        <BlogHeader blog={this.props.blog} />
        <main style={{ paddingTop: "1px", marginTop: "-1px" }}>
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
