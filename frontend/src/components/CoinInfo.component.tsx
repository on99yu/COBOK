import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';

interface CoinData{
    id: string;
    symbol: string;
    name: string;
    market_data:{
        current_price:{
            krw: number;
        }
        price_change_percentage_24h: number;
        high_24h:{
            krw: number;
        };
        low_24h:{
            krw:number;
        };
        total_volume:{
            krw: number;
        }
        market_cap:{
            krw: number;
        }
    }
}

interface TickerProps {
    ticker: string;
}

export const addComma = (price: number)=>{

    if (Number.isInteger(price)){
        const returnNum = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return returnNum;
    }else{
        const returnNum = price?.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return returnNum;
    }

}


const CoinInfo: React.FC<TickerProps> = ({ticker})=>{   

    const [coinData, setCoinData] = useState<CoinData>({
        id: '',
        symbol: '',
        name: '',
        market_data:{
            current_price: {
                krw:0,
            },
            price_change_percentage_24h: 0,
            high_24h:{
                krw: 0,
            },
            low_24h:{
                krw:0,
            },
            total_volume:{
                krw: 0,
            },
            market_cap:{
                krw: 0,
            }
    }
    });
    useEffect(()=>{
        console.log("CoinData fetch - useEffect")
        const fetchCoinData = async (ticker:string)=>{
            try{
                console.log("ticekr 확인",ticker)
                const res = await axios.get<CoinData>(`https://api.coingecko.com/api/v3/coins/${ticker}`);
                setCoinData(prevState => ({
                    ...prevState,
                    id: res.data.id,
                    symbol: res.data.symbol,
                    name: res.data.name,
                    market_data:{
                        current_price:{ 
                            krw: res?.data.market_data.current_price.krw,
                        },
                        price_change_percentage_24h: res.data.market_data.price_change_percentage_24h,
                        high_24h:{
                            krw: res.data.market_data.high_24h.krw,

                        },
                        low_24h:{
                            krw:res.data.market_data.low_24h.krw,
                        },
                        total_volume:{
                            krw: res.data.market_data.total_volume.krw,
                        },
                        market_cap:{
                            krw: res.data.market_data.market_cap.krw,
                        }
                    }
                }));
            }catch(error){
                console.error("Error fetching coin data:", error)
            }
        }
        fetchCoinData(ticker);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ticker]);
    const {market_data } = coinData;
    const {price_change_percentage_24h: pricechange} = market_data;
    const isPositiveChange= pricechange >=0;
    return (
        <CoinInfoContainer>
            <LeftContainer>
                <TickerContainer>
                    <Coin>{coinData?.name}</Coin>
                    <Ticker>{coinData?.symbol.toUpperCase()}/{'KRW'}</Ticker>
                </TickerContainer>
                <PriceContainer>
                    <PriceDiv>
                        <CurrentPrice isPositive={isPositiveChange}>{addComma(coinData?.market_data.current_price.krw)}</CurrentPrice>
                        <Currency isPositive={isPositiveChange}>{'KRW'}</Currency>
                    </PriceDiv>
                    <PriceDiv>
                        <DoD isPositive={isPositiveChange}>{isPositiveChange ? '+' : ''}{addComma(coinData?.market_data.price_change_percentage_24h)}{'%'}</DoD>
                        <DoDValue isPositive={isPositiveChange}>{isPositiveChange ? <RedTriangle/> : <BlueTriangle/>} { addComma((coinData?.market_data.current_price.krw / 100) * coinData.market_data.price_change_percentage_24h)}</DoDValue>
                    </PriceDiv>
                </PriceContainer>
            </LeftContainer>
            <CenterContainer>
                <DetailDiv>
                    <Detail>고가</Detail>
                    <High>{addComma(coinData?.market_data.high_24h.krw)}</High>
                </DetailDiv>
                <DetailDiv>
                    <Detail>저가</Detail>
                    <Low>{addComma(coinData?.market_data.low_24h.krw)}</Low>
                </DetailDiv>
                <DetailDiv>
                    <Detail>거래량</Detail>
                    <TotalVolume>{addComma(coinData?.market_data.total_volume.krw)}</TotalVolume>

                </DetailDiv>
                <DetailDiv>
                    <Detail>거래대금</Detail>
                    <MarketCap>{addComma(coinData?.market_data.market_cap.krw)}</MarketCap>
                </DetailDiv>
            </CenterContainer>
        </CoinInfoContainer>
    )

}

const CoinInfoContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
`
const LeftContainer = styled.div`

    width:100%;
    height:100%;
    align-items: center;
    flex-direction: column;

`
const CenterContainer = styled.div`
   
    width:50%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
`

const TickerContainer = styled.div`

    width:auto;
    height:40%;
    display: flex;
    justify-content: start;
    align-items: baseline;
`

const PriceContainer = styled.div`

    width:auto;
    height:70%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
`
const  PriceDiv = styled.div`

    width:100%;
    height:auto;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: baseline;

    padding-bottom: 20px;
`
const DetailDiv = styled.div`
    width:150%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Coin = styled.p`
    color:black;
    font-size: xx-large;
    font-weight: bold;
`
const Ticker = styled.p`
    color:gray;
    padding-left: 20px;
`
const CurrentPrice = styled.p<{isPositive: boolean}>`
    color: ${(props)=> (props.isPositive ? props.theme.Accent : props.theme.Main8)};
    font-size: xx-large;
`
const Currency = styled.p<{isPositive: boolean}>`
    color: ${(props)=> (props.isPositive ? props.theme.Accent : props.theme.Main8)};
    padding-left: 20px;
`
const DoD = styled.p<{isPositive: boolean}>`
    color: ${(props)=> (props.isPositive ? props.theme.Accent : props.theme.Main8)};
`
const DoDValue = styled.p<{isPositive: boolean}>`
    color: ${(props)=> (props.isPositive ? props.theme.Accent : props.theme.Main8)};
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const High = styled.p`
    color:${c => c.theme.Accent};
    font-weight: bold;
`
const Low = styled.p`
    color: ${c => c.theme.Main8};
    font-weight: bold;
`
const TotalVolume = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MarketCap = styled.p`
    display: flex;
    flex-direction: row;
`
const Detail = styled.p`
    
`
const RedTriangle = styled.div`

    width:0;
    height: 0;
    margin-right: 5px;
    border-bottom:10px solid ${c=>c.theme.Accent};
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
`
const BlueTriangle = styled.div`

    width:0;
    height: 0;
    margin-right: 5px;
    border-top:10px solid ${c=>c.theme.Main8};
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
`
export default CoinInfo