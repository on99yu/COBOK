import React from 'react'
import styled from 'styled-components'
import ATStartButton from './Button/ATStartButton.button'

const AutoTradingSimple: React.FC =()=>{
    return (
        <AutoTradingSimpleContainer>
            <ATStartButton/>
            <ATinfoContainer>
                <Div>
                    <Title>시그널</Title>
                    <Signal>{0}</Signal>
                </Div>
                <Div>
                    <Title>수익률</Title>
                    <Return>{0}</Return>
                </Div>
            </ATinfoContainer>
            <GotoATButton href="/AutoTrading">{'자동매매 현황'}</GotoATButton>

        </AutoTradingSimpleContainer>
    )
}

const AutoTradingSimpleContainer = styled.div`

    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const ATinfoContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const GotoATButton = styled.a`

    width: 70%;
    display: flex;
    justify-content: center;
    padding: 5px;

    color: ${props=>props.theme.Yellow};
    font-family: sans-serif;
    font-size: 15px;
    font-weight: bold;
    border-radius: 20px;
    border: 2px solid ${c=>c.theme.Yellow};
`

const Div = styled.div`
    width:150%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Title=styled.p`
`
const Signal =styled.p`
    
`
const Return = styled.p`
    
`
export default AutoTradingSimple