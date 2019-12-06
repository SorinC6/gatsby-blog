import { graphql, useStaticQuery } from "gatsby";

function useIntroData() {
  const data = useStaticQuery(
    graphql`
      query IntroQuery {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "Home" } } }) {
          edges {
            node {
              frontmatter {
                intro {
                  description
                  heading
                  image {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp
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
  );
  //console.log("QUERY ", data);
  return data.allMarkdownRemark.edges[0].node.frontmatter.intro;
}

export default useIntroData;
