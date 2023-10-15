import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";

import Logo from "./Logo";
const MainNavbar: React.FC =()=>{
    return (
        <NavbarContainer>
            <NavbarLinkContainer>
                <Logo/>
                <NavbarLink to="/">
                    Home
                </NavbarLink>
            </NavbarLinkContainer>
        </NavbarContainer>
    )

}

const NavbarContainer = styled.nav`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    background-color: ${(props)=>props.theme.BG5};
    border-bottom: 2px solid ${(props)=>props.theme.Main3};

`

const NavbarLinkContainer = styled.div`

    width:80%;
    height: 80%;

    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;


    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: ${(props)=>props.theme.Main1}; */
`
const NavbarLink = styled(Link)`
    color: black;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
`
    
export default MainNavbar