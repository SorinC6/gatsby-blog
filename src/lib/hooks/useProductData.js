import { graphql, useStaticQuery } from "gatsby";

function useProductData() {
  const data = useStaticQuery(
    graphql`
      query ProductQuery {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "Product" } } }
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

export default useProductData;
