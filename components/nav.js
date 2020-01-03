import React from 'react';
import NavBar from './styles/NavBar';
import NavButton from './styles/NavButton';
import styled from 'styled-components';
import HistoryIcon from './icons/HistoryIcon';
import ListIcon from './icons/ListIcon';
import HomeIcon from './icons/HomeIcon';
import BurgerIcon from './icons/BurgerIcon';
import Link from 'next/link';
import DoorLogo from './icons/DoorLogo'

const StyledLogo = styled.div`
  margin-right: 405px;
  margin-top: 10px;
  display: none;
  @media screen and (min-width: 900px){
    display: block
  }
`

const StyledDiv = styled.div` 
   display: flex;
   z-index: 1000;   
   flex-direction: column;
   align-content: center; 
   text-align: center;
   justify-content: center;
   font-family: sans-serif;
   font-size: 10px;
   
   div {
     display: none
   }
   .smallName{
       width: 100%;
       text-align: center;
       padding-top: 5%
       @media screen and (min-width: 900px){
         display: none;
        
       }
   }
   @media screen and (min-width: 900px){
    div {
      display: block;
      text-align: center;
      color: black;
  }
   }
`
export const AgentNav = () => {
    return(
        <NavBar>
          <StyledLogo>
        <DoorLogo
        height={30}
        width={30}/>
        </StyledLogo>
            <StyledDiv>
              <Link href="/leads">
                <NavButton>
                  <ListIcon
                    height={25}
                    width={25}
                    /> <div>Leads</div>                                                        
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
                    
                    />  <div>History</div>                                                       
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
                    />   <div>Profile</div>                                                     
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
          <StyledLogo>
        <DoorLogo
        height={30}
        width={30}/>
        </StyledLogo>
        <StyledDiv>
          <Link href="/">
        <NavButton><HomeIcon
            height={25}
            width={25}
            /><div>Home</div></NavButton>
            </Link>
        <div>Home</div>
        </StyledDiv>
        <StyledDiv>
        <Link href="/agents">
        <NavButton>
          <BurgerIcon
            height={25}
            width={25}
            /><div>Agents</div></NavButton>
            </Link>
        <div>Agents</div>
        </StyledDiv>
        <StyledDiv>
          <Link href="/profile">
        <NavButton>Profile<div>Profile</div></NavButton></Link>
        <div>Profile</div>
        </StyledDiv>
        
    </NavBar>
    )
}

export const PropRepNav = () => {
    return(
      <>
      
        <NavBar>
          <StyledLogo>
        <DoorLogo
        height={30}
        width={30}/>
        </StyledLogo>
        <StyledDiv>
        <NavButton><HomeIcon
            height={25}
            width={25}
            /><div>Home</div></NavButton>
        <a className ="smallName">Home</a>
        </StyledDiv>
        <StyledDiv>
        <NavButton><BurgerIcon
            height={25}
            width={25}
            /><div>Properties</div></NavButton>
        <a className= "smallName">Properties</a>
        </StyledDiv>
        <StyledDiv>
        <NavButton>Reppin<div>Profile</div></NavButton>
        <a className="smallName">Profile</a>
        </StyledDiv>
        <StyledDiv>
        <NavButton><div>Add Property</div></NavButton>
        <a className="smallName">Add Property</a>
        </StyledDiv>
    </NavBar>
    </>
    )
}