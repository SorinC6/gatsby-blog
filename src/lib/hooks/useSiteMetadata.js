import { graphql, useStaticQuery } from "gatsby"
import { header } from "change-case"

function useSiteMetadata() {
  const { site, file, head } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/homeBg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        head: file(relativePath: { regex: "/headerBg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  const dataObject = {
    siteData: site.siteMetadata,
    image: file.childImageSharp.fluid,
    header: head.childImageSharp.fluid,
  }
  //console.log(dataObject)
  return dataObject
}

export default useSiteMetadata
