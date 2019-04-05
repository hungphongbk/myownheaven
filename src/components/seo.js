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
import { Location } from "@reach/router"

export function makeMetaSpecs(prefix, specs) {
  return specs
    .filter(spec => Array.isArray(spec) && spec.length >= 2)
    .map(([field, value, defaultValue]) => ({
      name: prefix + ":" + field,
      content: value || defaultValue,
    }))
}

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  type,
  image,
  otherMeta,
}) {
  const {
    site: { siteMetadata },
    icon,
  } = useStaticQuery(
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
            url
            title
            description
            author
            social {
              facebook
            }
          }
        }
      }
    `
  )

  let metaDescription = description || siteMetadata.description,
    _image = (image || icon).childImageSharp

  _image = (_image.fixed || _image.fluid).srcWebp

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            ...makeMetaSpecs("og", [
              ["url", siteMetadata.url + location.pathname],
              ["title", title],
              ["description", metaDescription],
              ["type", type],
              ["image", _image],
              ["image:alt", metaDescription],
            ]),
            ...otherMeta,
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
      )}
    </Location>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
  type: `website`,
  otherMeta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["website", "article"]),
  otherMeta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
}

export default SEO
