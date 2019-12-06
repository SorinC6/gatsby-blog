import { graphql, useStaticQuery } from "gatsby";

function useContactData() {
  const data = useStaticQuery(
    graphql`
      query ContactQuery {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "Contact" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `
  );
  // console.log(JSON.stringify(data, undefined, 4));
  return data.allMarkdownRemark.edges[0].node;
}

export default useContactData;
