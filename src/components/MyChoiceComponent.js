import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
// import Image from "gatsby-image"

const MyChoiceComponent = () => {
  return (
    <Root>
      <h2>Approved</h2>
      <Left>
        <h3>Fontend masters</h3>
        <p>
          One of the best resources out there for learning web dev techonlogies.
          Multiple courses on React not just for begginers but advance topics
          too. Highly recommend Kend C Dotts couses about Advence React Pattern
          and React Testing Library, Steve .... , Brian Holt. And not only React
          but having a good understanding of javascript its a must so couse
          about it here -
        </p>
        <button>Learn more</button>
      </Left>
      <Right>
        <h3>Lambda School</h3>
        <p>
          Sed lacinia fringilla nulla sed iaculis. Suspendisse in viverra quam,
          vitae feugiat dolor. Donec sagittis nibh eu consequat tempor.
          Curabitur diam urna, tincidunt ut varius quis, tristique vitae turpis.
          Nunc vitae elit et turpis dapibus mattis. Duis vulputate, justo id
          laoreet vestibulum, lectus metus aliquam leo, ac vestibulum arcu ante
          eget leo. Nam a rhoncus nisl, quis tincidunt nulla. Donec odio arcu,
        </p>
        <button>Learn more</button>
      </Right>
    </Root>
  )
}

export default MyChoiceComponent

const Root = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 400px;
  display: flex;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  line-height: 1.5;

  h2 {
    position: absolute;
    left: 40%;
    top: -10%;
    font-size: 3rem;
    font-weight: 700;
    display: inline-block;
    padding: 0.25rem 1rem;
    text-transform: uppercase;
    font-family: "Courier";
    -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
    -webkit-mask-size: 944px 604px;
    mix-blend-mode: multiply;

    color: #0a9928;
    border: 0.5rem solid #0a9928;
    -webkit-mask-position: 13rem 6rem;
    transform: rotate(-14deg);
    border-radius: 0;
  }
`

const Left = styled.div`
  flex: 1;
  background-color: lightsalmon;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    font-weight: 400;
    font-size: 22px;
  }

  p {
    padding: 0 30px;
    text-align: justify;
    text-justify: inter-word;
  }
  button {
    padding: 20px;
    background: transparent;
    font-size: 20px;
  }
`
const Right = styled.div`
  flex: 1;
  background-color: lightsteelblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h3 {
    font-weight: 400;
    font-size: 22px;
  }

  p {
    padding: 0 20px;
    padding: 0 30px;
    text-align: justify;
    text-justify: inter-word;
  }
  button {
    padding: 20px;
    background: transparent;
    font-size: 20px;
  }
`

// const ImageBox = styled(Image)`
//   width: 236px;
//   height: 370px;

//   @media (max-width: 400px) {
//     display: none;
//   }
// `
