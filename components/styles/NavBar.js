import styled from 'styled-components';

const NavBar = styled.div `

display: flex;
position: fixed;
justify-content: space-evenly;
align-items: center;
flex: 1;
bottom: 0;
margin: 0;
width: 100%;
max-height: 120px;

@media (min-width:900px){
    top:0;
    
    justify-content: flex-end;
}
min-height: 70px;
`

export default NavBar;