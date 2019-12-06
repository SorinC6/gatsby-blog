import styled from "styled-components";
export const Root = styled.div`
  min-height: calc(100vh - 290px);
  padding: 0 calc((100vw - 600px) / 2);

  @media (max-width: 400px) {
    padding: 0 20px;
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
