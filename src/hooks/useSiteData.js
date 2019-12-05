import { graphql, useStaticQuery } from "gatsby"

function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery44 {
      site {
        siteMetadata {
          title
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
  `)
  return data
}

export default useSiteMetadata
