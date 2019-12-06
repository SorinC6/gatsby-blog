import { graphql, useStaticQuery } from "gatsby";

function useSlug() {
  const data = useStaticQuery(
    graphql`
      query SlugQuery {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  return data.allMarkdownRemark.edges;
}

export default useSlug;
