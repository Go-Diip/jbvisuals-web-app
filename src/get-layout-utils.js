import React from "react"
import MiscContent from "./layouts/MiscContent"
import HomeHero from "./layouts/HomeHero"
import HomeIntroText from "./layouts/HomeIntroText"
import ProjectsGrid from "./layouts/ProjectsGrid"
import ContactRow from "./layouts/ContactRow"
import InfoRow from "./layouts/InfoRow"
import CenteredRow from "./layouts/CenteredRow"
import ContactSection from "./layouts/ContactSection"

export const getPageLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContent {...layout} />
    case "HomeHero":
      return <HomeHero {...layout} />
    case "HomeIntroText":
      return <HomeIntroText {...layout} />
    case "ProjectsGrid":
      return <ProjectsGrid {...layout} />
    case "ContactRow":
      return <ContactRow {...layout} />
    case "InfoRow":
      return <InfoRow {...layout} />
    case "CenteredRow":
      return <CenteredRow {...layout} />
    case "ContactSection":
      return <ContactSection {...layout} />
  }
}
