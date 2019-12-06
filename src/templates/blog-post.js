import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import moment from "moment";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

export function BlogPostTemplate({ title, date, body }) {
  // not sure why post data its comming only in BlogPost component
  return (
    <Root>
      <h1>{title}</h1>
      <h6>Posted on: {moment(date).format("MMMM Do YYYY, h:mm a")}</h6>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </Root>
  );
}

BlogPostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string
};

function BlogPost({ data }) {
  //console.log(JSON.stringify(data, undefined, 4));
  const { title, date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <BlogPostTemplate title={title} date={date} body={html} />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.objectOf({
    markdownRemark: PropTypes.objectOf({
      frontmatter: PropTypes.objectOf({
        title: PropTypes.string.isRequired,
        date: PropTypes.string
      }),
      html: PropTypes.string
    })
  })
};

export default BlogPost;

const Root = styled.div`
  padding: 0 calc((100vw - 600px) / 2);

  @media (max-width: 400px) {
    padding: 0 20px;
  }

  h1 {
    text-align: center;
  }

  h1,
  h2 {
    padding: 20px;
    margin-top: 10px;
  }

  h6 {
    text-align: center;
  }

  p {
    padding: 20px 5px;
    line-height: 1.4;
    text-align: justify;
    text-justify: inter-word;
  }

  img {
    border-radius: 5px;
  }
`;
