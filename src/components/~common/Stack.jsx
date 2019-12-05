import React from 'react'
import reactSVG from '../../assets/icons/react.svg'
import styled from "styled-components"

export default function Stack() {
  return (
    <Root>
      <img src={reactSVG} />
      <img src={reactSVG} />
      <img src={reactSVG} />
      <img src={reactSVG} />
      <img src={reactSVG} />
      <img src={reactSVG} />
    </Root>
  )
}

const Root = styled.div`
  display:flex;
  justify-content:space-evenly; 
  padding:50px 0;
  img{
    max-width:50px;
  }
`
