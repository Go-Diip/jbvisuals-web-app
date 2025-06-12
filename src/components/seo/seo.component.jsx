/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ data, meta }) {
  if (!data) return null

  const {
    metaDesc,
    title,
    canonical,
    metaRobotsNofollow,
    opengraphSiteName,
    opengraphDescription,
    twitterDescription,
    twitterTitle,
    twitterImage,
    opengraphTitle,
    opengraphImage,
    opengraphUrl,
    opengraphType,
    opengraphModifiedTime,
    metaRobotsNoindex,
    opengraphAuthor,
    focusKw,
    metaKeyWords,
    openGraphAuthor,
  } = data

  const isContactPage = canonical === "/contact/"
  const schemaOrgJSONLD = isContactPage
    ? {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Jbvisuals",
        description:
          "Get a free quote for 3D architectural visualizations from JB Visuals.",
        url: "https://www.jbvisuals.co/contact/",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+593-96-909-7789",
          contactOption: "TollFree",
          areaServed: ["US", "UK", "CA", "AU", "EU"],
          availableLanguage: ["English", "Spanish"],
        },
        email: "hello@jbvisuals.co",
      }
    : {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Jbvisuals",
        description:
          "Jbvisuals provides premium 3D architectural visualization services worldwide.",
        url: "https://www.jbvisuals.co/",
        areaServed: ["US", "UK", "CA", "AU", "EU"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+593-96-909-7789",
          email: "hello@jbvisuals.co",
        },
      }

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
      {title && <title>{title}</title>}

      {/* General tags */}
      {metaDesc && <meta name="description" content={metaDesc} />}

      {process.env.GATSBY_ACTIVE_ENV === "production" && metaRobotsNoindex ? (
        <meta
          name="robots"
          content={`${metaRobotsNoindex}, ${metaRobotsNofollow}`}
        />
      ) : (
        <meta name="robots" content="noindex" />
      )}

      {canonical && (
        <link rel="canonical" href={`https://www.jbvisuals.co${canonical}`} />
      )}

      {/* OpenGraph tags */}

      {opengraphUrl && (
        <meta
          property="og:url"
          content={`https://www.jbvisuals.co${opengraphUrl}`}
        />
      )}

      {opengraphTitle && <meta property="og:title" content={opengraphTitle} />}

      {opengraphDescription && (
        <meta property="og:description" content={opengraphDescription} />
      )}

      {opengraphType && <meta property="og:type" content={opengraphType} />}

      {opengraphSiteName && (
        <meta property="og:site_name" content={opengraphSiteName} />
      )}

      {opengraphImage && (
        <meta property="og:image" content={opengraphImage.sourceUrl} />
      )}

      {opengraphAuthor && (
        <meta property="og:author" content={openGraphAuthor} />
      )}

      {/* Twitter Card tags */}

      {twitterTitle && <meta name="twitter:title" content={title} />}

      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}

      {twitterImage && (
        <meta name="twitter:image" content={twitterImage.sourceUrl} />
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  data: PropTypes.object,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
