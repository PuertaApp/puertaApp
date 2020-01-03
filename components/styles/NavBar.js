import styled from "styled-components";

<<<<<<< HEAD
const NavBar = styled.div `
background: #f9f9f9;
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

`

export default NavBar;
=======
const NavBar = styled.div`
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
	@media (min-width: 900px) {
		top: 0;
		padding-bottom: 80px;

		justify-content: flex-end;
	}
`;
export default NavBar;
>>>>>>> 8e44d4efd2d84f7319cc28e87229be978316cf05
