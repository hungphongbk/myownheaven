/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function makeMetaSpecs(prefix, specs) {
  return specs.map(([field, value, defaultValue]) => ({
    name: prefix + ":" + field,
    content: value || defaultValue,
  }))
}

function SEO({ description, lang, meta, keywords, title, type, image }) {
  const { site, icon } = useStaticQuery(
    graphql`
      query {
        icon: file(absolutePath: { regex: "/icon.png/" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  let metaDescription = description || site.siteMetadata.description,
    _image = (image || icon).childImageSharp
  _image = (_image.fixed || _image.fluid).srcWebp

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        ...makeMetaSpecs("og", [
          ["title", title],
          ["description", metaDescription],
          ["type", type],
          ["image", _image],
          ["image:alt", metaDescription],
        ]),
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
  type: `website`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["website", "article"]),
}

export default SEO
