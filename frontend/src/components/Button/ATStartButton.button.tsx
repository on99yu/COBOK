import React from 'react'
import styled from 'styled-components'

const StartButtonHandler = ()=>{
    alert('준비 중입니다...')
}


const  ATStartButton:React.FC = () => {
  return (
    <StartButton onClick={StartButtonHandler}>{'자동매매 시작'}</StartButton>
  )
};

const StartButton = styled.button`

    width: 70%;
    align-items: center;
    padding: 5px;

    color: ${props=>props.theme.Main8};
    font-family: sans-serif;
    font-size: 15px;
    font-weight: bold;
    border-radius: 20px;
    border: 2px solid ${c=>c.theme.Main8};
    background-color: white;
`
export default ATStartButton