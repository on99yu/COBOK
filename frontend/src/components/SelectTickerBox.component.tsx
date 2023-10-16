import React from 'react'
import styled from 'styled-components'

interface TickerChangeProps {
    ticker: string;
    TickerChangeHandler : (ticker: string) => void;
}

const SelectTickerBox: React.FC<TickerChangeProps> = ({ticker,TickerChangeHandler})=>{
    
    // const [selectedticker, setSelectedTicker] = useState<string>('BTC');

    const ChangeTickerHandler = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        TickerChangeHandler(event.currentTarget.name)
    }

    return (
        <TickerBoxContainer>
            <TicekrBox onClick={ChangeTickerHandler} name="bitcoin">BTC</TicekrBox>
            <TicekrBox onClick={ChangeTickerHandler} name="ethereum">ETH</TicekrBox>
        </TickerBoxContainer>
    )
}

const TickerBoxContainer = styled.div`
    display: flex ;
    flex-direction: column;
`
const TicekrBox = styled.button`

    margin:10px;
    align-items: center;
    color: ${props=>props.theme.Text};
    font-family: sans-serif;
    font-size: 20px;
    border: 2px solid black;
    background-color: white;
`

export default SelectTickerBox;