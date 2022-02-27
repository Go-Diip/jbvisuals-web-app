/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo/seo.component"
import Header from "../components/header/header.component"
import { AppContainer } from "../styles/app.styles"
import Footer from "./footer/footer.component"
import Sidebar from "./sidebar/sidebar.component"
import SimpleReactLightbox from "simple-react-lightbox"

const Layout = ({ seo, children, isHome }) => {
  return (
    <>
      {seo && <SEO data={seo} />}
      {/*<Header />*/}

      <AppContainer>
        <Header isHome={isHome} />
        <Sidebar isHome={isHome} />
        <div className="contentWrapper">
          <main>
            <SimpleReactLightbox>{children}</SimpleReactLightbox>
          </main>
          <Footer />
        </div>
      </AppContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
