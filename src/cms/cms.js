import CMS from "netlify-cms-app";

import HomePagePreview from "./preview-templates/HomePagePreview";
import BlogPagePreview from "./preview-templates/BlogPagePreview";
import ProductsPageTemplate from "./preview-templates/ProductPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("blog", BlogPagePreview);
CMS.registerPreviewTemplate("product", ProductsPageTemplate);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
