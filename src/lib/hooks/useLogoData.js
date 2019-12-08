import { graphql, useStaticQuery } from "gatsby"

function useLogoData() {
  const data = useStaticQuery(
    graphql`
      query LogoQuery {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "Home" } } }) {
          edges {
            node {
              frontmatter {
                logos {
                  image
                  link
                }
                logo {
                  image {
                    childImageSharp {
                      fixed(width: 300, height: 300) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  //console.log("QUERY ", data);
  return data.allMarkdownRemark.edges[0].node.frontmatter
}

export default useLogoData
