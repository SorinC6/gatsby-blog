import { graphql, useStaticQuery } from "gatsby";

function useLogoData() {
  const data = useStaticQuery(
    graphql`
      query BlogQuery($nrOfBlogs: Int) {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "blog-post" }, date: {} }
          }
          limit: $nrOfBlogs
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              frontmatter {
                title
                image: featuredimage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                excerpt
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  //console.log("QUERY ", data);
  return data.allMarkdownRemark.edges;
}

export default useLogoData;
