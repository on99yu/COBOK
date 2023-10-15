import React from 'react'
import styled from "styled-components"

export function Main(){
    return (
    <CoinInfoContainer>
        CoininfoContainer
    </CoinInfoContainer>
    );
};

const CoinInfoContainer = styled.div`
    width:80%;
    height: 600px;
    
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 15%;

    border: 2px solid ${props=>props.theme.Main5}
`