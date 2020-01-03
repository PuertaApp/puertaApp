import React from 'react';
import NavBar from './styles/NavBar';
import NavButton from './styles/NavButton';
import styled from 'styled-components';
import HistoryIcon from './icons/HistoryIcon';
import ListIcon from './icons/ListIcon';
import HomeIcon from './icons/HomeIcon';
import BurgerIcon from './icons/BurgerIcon';
import Link from 'next/link';

const StyledDiv = styled.div` 
   display: flex;
   z-index: 1000;   
   flex-direction: column;
   align-content: center; 
   text-align: center;
   justify-content: center;
   font-family: sans-serif;
   font-size: 10px;
   a {
       width: 100%;
       text-align: center;
       padding-top: 5%
   }
`
export const AgentNav = () => {
    return(
        <NavBar>
            <StyledDiv>
              <Link href="/leads">
                <NavButton>
                  <ListIcon
                    height={25}
                    width={25}
                    />                                                         
                </NavButton>                                 
              </Link>
              <a>Leads</a>
            </StyledDiv>
            <StyledDiv>
              <Link href="/history">
                <NavButton>
                  <HistoryIcon
                    height={25}
                    width={25}
                    />                                                         
                </NavButton>                            
              </Link>
              <a>History</a>
            </StyledDiv>
            <StyledDiv>
              <Link href="/profile">
                <NavButton>
                  <HistoryIcon
                    height={25}
                    width={25}
                    />                                                        
                </NavButton>            
              </Link>         
              <a>Profile</a> 
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