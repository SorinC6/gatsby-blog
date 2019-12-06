import { graphql, useStaticQuery } from "gatsby";

function useHeroData() {
  const data = useStaticQuery(
    graphql`
      query HeroQuery {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "Home" } } }) {
          edges {
            node {
              frontmatter {
                title
                templateKey
                hero {
                  heading
                  subheading
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
  return data.allMarkdownRemark.edges[0].node.frontmatter.hero;
}

export default useHeroData;
