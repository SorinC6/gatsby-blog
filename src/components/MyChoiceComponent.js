import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"

const MyChoiceComponent = () => {
  return (
    <Root>
      <Left>
        <h3>Fontend masters</h3>
        <p>
          Sed lacinia fringilla nulla sed iaculis. Suspendisse in viverra quam,
          vitae feugiat dolor. Donec sagittis nibh eu consequat tempor.
          Curabitur diam urna, tincidunt ut varius quis, tristique vitae turpis.
          Nunc vitae elit et turpis dapibus mattis. Duis vulputate, justo id
          laoreet vestibulum, lectus metus aliquam leo, ac vestibulum arcu ante
          eget leo. Nam a rhoncus nisl, quis tincidunt nulla. Donec odio arcu,
          faucibus non ante vitae, condimentum scelerisque lorem. Fusce mollis
          accumsan faucibus. Curabitur facilisis sem laoreet, venenatis arcu id,
          dapibus odio. Aenean posuere augue pretium lacus porttitor maximus.
          Quisque mollis nec nisl ut tempus. Maecenas dictum porttitor
          porttitor. Aliquam vestibulum nibh a nunc malesuada cursus.
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
          faucibus non ante vitae, condimentum scelerisque lorem. Fusce mollis
          accumsan faucibus. Curabitur facilisis sem laoreet, venenatis arcu id,
          dapibus odio. Aenean posuere augue pretium lacus porttitor maximus.
          Quisque mollis nec nisl ut tempus. Maecenas dictum porttitor
          porttitor. Aliquam vestibulum nibh a nunc malesuada cursus.
        </p>
        <button>Learn more</button>
      </Right>
    </Root>
  )
}

export default MyChoiceComponent

const Root = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 400px;
  display: flex;
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
    padding: 0 20px;
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
