import React, {useState} from 'react'
import styled from "styled-components"

import CoinInfo from '../components/CoinInfo.component';
import SelectTickerBox from '../components/SelectTickerBox.component';

const Main: React.FC=()=>{

    const [ticker, setTicker] = useState<string>('');
    const TickerChangeHandler = (ticker: string)=>{
        setTicker(ticker)
    }
    return (
    <MainContainer>
        <CoinInfoContainer>
            <CoinPriceContainer>
                <CoinInfo ticker={ticker}/>
            </CoinPriceContainer>
        </CoinInfoContainer>
        <SelectTickerContainer>
            <SelectTickerBox ticker={ticker} TickerChangeHandler={TickerChangeHandler}/>
        </SelectTickerContainer>
    </MainContainer>
    );
};
const MainContainer = styled.div`

    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 15%;

    display: flex;
    flex-direction: row;
`

const CoinInfoContainer = styled.div`

    min-width: 700px;
    width:80%;
    height: 180px;

    border: 2px solid ${props=>props.theme.Main5};
    border-radius: 16px;
`
const CoinPriceContainer = styled.div`

    width: 40%;
    height:100%;
`
const SelectTickerContainer = styled.div`

    min-width: 200px;
    width:20%;
    height: auto;
    margin-left: 100px;

    border: 2px solid ${props=>props.theme.Yellow};
    /* border-radius: 16px; */
`
export default Main;