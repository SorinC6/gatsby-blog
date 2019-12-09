import CMS from "netlify-cms-app"

import HomePagePreview from "./preview-templates/HomePagePreview"
import BlogPagePreview from "./preview-templates/BlogPagePreview"
import AboutPagePreview from "./preview-templates/AboutPagePreview"
import ContactPagePreview from "./preview-templates/ContactPagePreview"

CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("blog", BlogPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("contact", ContactPagePreview)
