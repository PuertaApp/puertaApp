import styled from "styled-components";

const NavBar = styled.div`
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
	z-index: 9999;
	@media (min-width: 900px) {
		top: 0;
		padding-bottom: 80px;

		justify-content: flex-end;
	}
`;

export default NavBar;
