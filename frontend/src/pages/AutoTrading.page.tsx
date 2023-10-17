import React from 'react'
import styled from "styled-components"

export function AutoTrading(){

    return (
    <ATInfoContainer>
        준비중입니다...
    </ATInfoContainer>
    );
};

const ATInfoContainer = styled.div`

    width:80%;
    height: 600px;
    
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 15%;
    padding:20px;
    border: 2px solid ${props=>props.theme.Main5}
`