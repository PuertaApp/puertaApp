import styled from 'styled-components';

const NavBar = styled.div `
z-index: 1000;
display: flex;
position: fixed;
justify-content: space-evenly;
align-items: center;
flex: 1;
bottom: 0;
margin: 0;
width: 100%;
max-height: 120px;
background-color: #f9f9f9;
@media (min-width:900px){
    top:0;
    border: 2px solid red;
    justify-content: flex-end;
}
`

export default NavBar;