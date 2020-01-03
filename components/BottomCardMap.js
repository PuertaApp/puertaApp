import styled from "styled-components";
import MapMarkerIcon from "../components/icons/MapMarkerIcon";
import SearchIcon from "../components/icons/SearchIcon";

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
	padding: 0 1rem 70px;
	flex: 1;
	bottom: 0;
	margin: 0;
	width: 100%;
	min-height: 120px;
	h3 {
		text-align: center;
		font-size: 0.9rem;
		margin: 0.5rem;
	}
	ul {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
		li {
			display: flex;
			margin: 0.2rem 0;
			align-items: center;
			input {
				background: #f9f9f9;
				border: 3px solid #ffffff;
				box-sizing: border-box;
				box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
					inset 2px 2px 8px rgba(126, 138, 167, 0.4),
					inset -4px -4px 10px rgba(255, 255, 255, 0.7);
				border-radius: 26px;
				padding: 0.6rem 2rem;

				&::placeholder {
					color: rgba(150, 165, 199, 0.5);
					font-size: 0.8rem;
				}
			}
			.icon {
				background: linear-gradient(
					131.71deg,
					#fafafa 0%,
					#f5f5f5 100.03%
				);
				border: 1px solid rgba(255, 255, 255, 0.6);
				box-sizing: border-box;
				box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
					-6px -6px 12px rgba(255, 255, 255, 0.8);
				border-radius: 15px;
				height: 40px;
				width: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 0.5rem;
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
				<div className="icon">
					<SearchIcon height={"25px"} width={"25px"} />
				</div>
			</li>
			<li>
				<input
					type="text"
					className="location"
					id="phone-number"
					placeholder="Please enter your phone number..."
				/>
				<div className="icon">
					<MapMarkerIcon height={"25px"} width={"25px"} />
				</div>
			</li>
		</ul>
	</BottomCardMapStyle>
);

export default BottomCardMap;
