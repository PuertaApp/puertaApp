import React from 'react';
import NavBar from './styles/NavBar';
import NavButton from './styles/NavButton';
import styled from 'styled-components';
import HistoryIcon from '../components/icons/HistoryIcon';
import ListIcon from '../components/icons/ListIcon';
import HomeIcon from '../components/icons/HomeIcon';
import BurgerIcon from '../components/icons/BurgerIcon';

const StyledDiv = styled.div` 
   display: flex;
   flex-direction: column;
   align-content: center; 
   justify-content: center;
   font-family: sans-serif;
   font-size: 10px;

   div {
       width: 100%;
       text-align: center;
       padding-top: 5%
   }
`
export const AgentNav = () => {
    return(
        <NavBar>
            <StyledDiv>
            <NavButton><ListIcon
                height={25}
                width={25}
                /></NavButton>
            <div>Leads</div>
            </StyledDiv>
            <StyledDiv>
            <NavButton><HistoryIcon
                height={25}
                width={25}
                /></NavButton>
            <div>History</div>
            </StyledDiv>
            <StyledDiv>
            <NavButton>Profile</NavButton>
            <div>Profile</div>
            </StyledDiv>
        </NavBar>
    )
}

export const BuyerNav = () => {
    return(
        <NavBar>
        <StyledDiv>
        <NavButton><HomeIcon
            height={25}
            width={25}
            /></NavButton>
        <div>Home</div>
        </StyledDiv>
        <StyledDiv>
        <NavButton><BurgerIcon
            height={25}
            width={25}
            /></NavButton>
        <div>Agents</div>
        </StyledDiv>
        <StyledDiv>
        <NavButton>Profile</NavButton>
        <div>Profile</div>
        </StyledDiv>
    </NavBar>
    )
}

export const PropRepNav = () => {
    return(
        <NavBar>
        <StyledDiv>
        <NavButton><HomeIcon
            height={25}
            width={25}
            /></NavButton>
        <div>Home</div>
        </StyledDiv>
        <StyledDiv>
        <NavButton><BurgerIcon
            height={25}
            width={25}
            /></NavButton>
        <div>Properties</div>
        </StyledDiv>
        <StyledDiv>
        <NavButton>Reppin</NavButton>
        <div>Profile</div>
        </StyledDiv>
        <StyledDiv>
        <NavButton></NavButton>
        <div>Add Property</div>
        </StyledDiv>
    </NavBar>
    )
}