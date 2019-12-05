import React from 'react'
import styled from "styled-components"
import BlogList from './BlogList'
import Stack from './~common/Stack'
import CardWrapper from './~common/BlogCard'

const Home = () => {

  return (
    <Root>
      <Title>Hello Amigo Test Title</Title>
      <Stack />
      <BlogList />
      <CardWrapper >
        Hshhseererer
        sdsds
        sdsd
      </CardWrapper>

    </Root>
  )
}

export default Home

const Root = styled.div`
  margin-top: -200px;
  border-radius:10px;
  background-color: rgba(0,0,0,.1);

`

const Title = styled.h4`
  text-align:center;
`