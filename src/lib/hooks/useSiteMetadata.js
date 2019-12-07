import { graphql, useStaticQuery } from "gatsby"

function useSiteMetadata() {
  const { site, file } = useStaticQuery(
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
      }
    `
  )
  const dataObject = {
    siteData: site.siteMetadata,
    image: file.childImageSharp.fluid,
  }
  //console.log(dataObject)
  return dataObject
}

export default useSiteMetadata
