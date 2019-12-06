import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundSlider from "gatsby-image-background-slider";

const SliderTest = ({ children }) => (
  <Root>
    <Slider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // pass down standard element props
    />
  </Root>
);

export default SliderTest;

const Root = styled.div``;

const Slider = styled(BackgroundSlider)`
  position: relative;
  max-width: 100px;
  max-height: 50px;
`;
