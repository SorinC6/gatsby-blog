import React from "react"
import IndexTemplate from "../templates/index-page"

const Index = ({ location }) => {
  console.log(location)
  return (
    <>
      <IndexTemplate location={location} />
    </>
  )
}

export default Index
