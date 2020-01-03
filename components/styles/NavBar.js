import styled from "styled-components";

<<<<<<< HEAD
const NavBar = styled.div`
	display: flex;
	position: fixed;
	justify-content: space-evenly;
	align-items: center;
	flex: 1;
	bottom: 0;
	margin: 0;
	width: 100%;
	max-height: 120px;
	min-height: 70px;
	z-index: 9999;
	@media (min-width: 900px) {
		top: 0;
		padding-bottom: 80px;

		justify-content: flex-end;
	}
`;
=======
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
min-height: 70px;
@media (min-width:900px){
    top:0;
    padding-bottom: 80px;
    
    justify-content: flex-end;
}
>>>>>>> 21084677c115c83e8fe9434f51d1f03354be5252

export default NavBar;
