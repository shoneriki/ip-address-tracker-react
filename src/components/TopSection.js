import React from 'react'
import styled from "styled-components"
import image from "../assets/ip-address-tracker-master/images/pattern-bg.png"

const OuterContainer = styled.div`
  width: 100%;
  height: 40vh;
  border: 1px solid green;
  background: url(${image});
  display: flex;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
`

const TopSection = () => {

  return (
    <OuterContainer>
      <Title>IP Address Tracker</Title>
    </OuterContainer>
  )
}

export default TopSection
