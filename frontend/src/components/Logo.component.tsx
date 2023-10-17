import React from 'react'
import styled from "styled-components"
import Icon from '../assets/icon_512.png'
import { Link } from 'react-router-dom'
function Logo() {
  return (
    <LogoContainer to="/">
      <Iconimg src={Icon}/>
      <LogoText>COBOK</LogoText>
    </LogoContainer>
  )
}

const LogoContainer = styled(Link)`
  /* padding:5px; */

  width: auto;
  height:100%;

  display:flex;
  flex-direction:row;
  align-items: center;
  /* background-color: ${(props)=>props.theme.Main1}; */
`

const Iconimg = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${props=> props.src});
`
const LogoText = styled.div`
  padding:6px;
  color: ${(props)=>props.theme.Main8};
  font-size: x-large;
  font-weight: bold;
`
export default Logo