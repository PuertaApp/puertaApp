import styled from "styled-components";

const BottomCardMapStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-top-right-radius: 35px;
	border-top-left-radius: 35px;
	background: #f9f9f9;
	z-index: 900;
	position: fixed;
	justify-content: space-evenly;
	align-items: center;
	padding: 0 3rem 70px;
	flex: 1;
	bottom: 0;
	margin: 0;
	width: 100%;
	min-height: 120px;
	border: 1px solid blue;
	h3 {
		text-align: center;
	}
	ul {
		border: 1px solid red;
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		padding: 0;
		margin: 0;
		li {
			display: flex;
			margin: 0.2rem 0;
			input {
				background: #f9f9f9;
				border: 3px solid #ffffff;
				box-sizing: border-box;
				box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
					inset 2px 2px 8px rgba(126, 138, 167, 0.4),
					inset -4px -4px 10px rgba(255, 255, 255, 0.7);
				border-radius: 26px;
				padding: 0.8rem 1rem;

				&::placeholder {
					color: rgba(150, 165, 199, 0.5);
					font-size: 1rem;
				}
			}
		}
	}
`;

const BottomCardMap = props => (
	<BottomCardMapStyle>
		<h3>Good evening {props.name || "Sebastian"}</h3>
		<ul>
			<li>
				<input
					type="text"
					className="address"
					id="name"
					placeholder="Please enter your full name..."
				/>
				<div className="icon"></div>
			</li>
			<li>
				<input
					type="text"
					className="location"
					id="phone-number"
					placeholder="Please enter your phone number..."
				/>
				<div className="icon"></div>
			</li>
		</ul>
	</BottomCardMapStyle>
);

export default BottomCardMap;
