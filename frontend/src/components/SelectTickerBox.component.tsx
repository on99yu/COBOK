import React, { useState } from 'react'
import styled from 'styled-components'

interface TickerChangeProps {
    ticker: string;
    TickerChangeHandler : (ticker: string) => void;
}

const SelectTickerBox: React.FC<TickerChangeProps> = ({ticker,TickerChangeHandler})=>{
    
    const [selectedTicker, setSelectedTicer] = useState<string>('');

    const ChangeTickerHandler = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();

        TickerChangeHandler(event.currentTarget.name);
        setSelectedTicer(event.currentTarget.name);
    }

    return (
        <TickerBoxContainer>
            <TicekrBox onClick={ChangeTickerHandler} 
                name="bitcoin" 
                selected={selectedTicker === 'bitcoin'}>BTC</TicekrBox>
            <TicekrBox onClick={ChangeTickerHandler} 
                name="ethereum"
                selected={selectedTicker === 'ethereum'}>ETH</TicekrBox>
        </TickerBoxContainer>
    )
}

const TickerBoxContainer = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
`
const TicekrBox = styled.button<{selected: boolean}>`

    width:50%;
    margin:10px;
    align-items: center;
    color: ${props=>props.theme.Text};
    background-color: ${props => props.selected ? props.theme.BG4 : 'white'};

    font-family: sans-serif;
    font-size: 20px;
    border-radius: 16px;
    border: 2px solid ${c=>c.theme.Yellow};
    &:hover{
        background-color: ${props => props.selected ? props.theme.BG4 : 'white'};
        transition: 0.5s;
    };

`

export default SelectTickerBox;