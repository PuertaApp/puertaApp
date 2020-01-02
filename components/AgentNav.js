import React from 'react';
import NavBar from './styles/NavBar';
import NavButton from './styles/NavButton';

const AgentNav = () => {
    return(
        <NavBar>
            <div></div>
            <NavButton><a src='components/icons/ListIcon.js'/></NavButton>
            <div>Leads</div>
            <NavButton><a src='./icons/HistoryIcon.js'/></NavButton>
            <div>History</div>
            <NavButton>Profile</NavButton>
            <div>Profile</div>
        </NavBar>
    )
}

export default AgentNav;