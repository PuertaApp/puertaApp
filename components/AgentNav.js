import React from 'react';
import NavBar from './styles/NavBar';
import NavButton from './styles/NavButton';
import styled from 'styled-components';
import HistoryIcon from '../components/icons/HistoryIcon';
import ListIcon from '../components/icons/ListIcon';

const StyledDiv = styled.div` 
    margin: 33%
`
const AgentNav = () => {
    return(
        <NavBar>
            <StyledDiv>
            <NavButton><ListIcon/></NavButton>
            <div>Leads</div>
            </StyledDiv>
            <StyledDiv>
            <NavButton><HistoryIcon/></NavButton>
            <div>History</div>
            </StyledDiv>
            <StyledDiv>
            <NavButton>Profile</NavButton>
            <div>Profile</div>
            </StyledDiv>
        </NavBar>
    )
}

export default AgentNav;