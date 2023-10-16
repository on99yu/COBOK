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
        };
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

const CoinInfo: React.FC<TickerProps> = ({ticker})=>{

    const [coinData, setCoinData] = useState<CoinData>({
        id: '',
        symbol: '',
        name: '',
        market_data:{
            current_price:{
                krw: 0,
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
                            krw: res?.data.market_data.current_price.krw

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
        console.log(JSON.stringify(coinData,null,2))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ticker]);

    return (
        <CoinInfoContainer>
            <LeftContainer>
                <TickerContainer>
                    <Coin>{coinData?.name}</Coin>
                    <Ticker>{coinData?.symbol.toUpperCase()}/{'KRW'}</Ticker>
                </TickerContainer>
                <PriceContainer>
                    <Div>
                        <CurrentPrice>{coinData?.market_data.current_price.krw}</CurrentPrice>
                        <Currency>{'KRW'}</Currency>
                    </Div>
                    <Div>
                        <DoD>{coinData?.market_data.price_change_percentage_24h}</DoD>
                        <DoDValue>{ (coinData?.market_data.current_price.krw / 100) * coinData.market_data.price_change_percentage_24h}</DoDValue>
                    </Div>
                </PriceContainer>
            </LeftContainer>
            <CenterContainer>
                <High>{coinData?.market_data.high_24h.krw}</High>
                <Low>{coinData?.market_data.low_24h.krw}</Low>
                <TotalVolume>{coinData?.market_data.total_volume.krw}</TotalVolume>
                <MarketCap>{coinData?.market_data.market_cap.krw}</MarketCap>
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
    padding:30px;

`
const CenterContainer = styled.div`
    width:auto;
    height:100%;
    display: flex;
    flex-direction: column;
    
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
`
const Div = styled.div`

    width:100%;
    height:auto;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: baseline;

    padding-bottom: 20px;
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
const CurrentPrice = styled.p`
    color: red;
    font-size: xx-large;
`
const Currency = styled.p`
    color: red;
    padding-left: 20px;
`
const DoD = styled.p`
    color: red;
    margin-left: 5px;
`
const DoDValue = styled.p`
    color: red;
    padding-left: 20px;
`
const High = styled.p`
    color:red;
`
const Low = styled.p`
    
`
const TotalVolume = styled.p`
    
`
const MarketCap = styled.p`
    
`
export default CoinInfo