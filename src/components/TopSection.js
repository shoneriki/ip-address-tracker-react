import React from 'react'
import styled from "styled-components"
import BackgroundImg from "../assets/ip-address-tracker-master/images/pattern-bg.png"
import arrow from "../assets/ip-address-tracker-master/images/icon-arrow.svg"

const OuterContainer = styled.div`
  width: 100%;
  height: 40vh;
  border: 1px solid green;
  background: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items:center;

`
const Title = styled.h1`
  color: white;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`
const Input = styled.input`
  border-radius: 8px 0 0 8px;
  border: none;
  height: 32px;
  width: 60%;
  padding: 0 16px;
  position: relative;
`;
const InputImg = styled.img`
  height: 32px;
  width: 34px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 8px 8px 0;
  position: relative;
  border: transparent;
  background: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25% 25%;
  background-color: black;
`

const TopSection = () => {

  return (
    <OuterContainer>
      <Title>IP Address Tracker</Title>
      <InputContainer>
        <Input type="text"/>
        <InputImg />
      </InputContainer>
    </OuterContainer>
  )
}

export default TopSection
