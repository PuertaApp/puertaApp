import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";

const StyledPickUpAtLocation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		background: linear-gradient(153.24deg, #fafafa 0%, #f5f5f5 100.03%);
		border: 1px solid #ffffff;
		box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
			-12px -12px 24px rgba(255, 255, 255, 0.7);
		border-radius: 41px;
		padding: 1rem 2rem;
		width: 90%;
		margin-top: 1rem;
		display: none;

		p {
			color: #141940;
			font-size: 1.2rem;
			text-align: center;
			margin: 0.5rem;
		}

		.btn-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.btn {
				background: linear-gradient(
					162.79deg,
					#fafafa 0%,
					#f5f5f5 100.03%
				);
				border: 1px solid rgba(255, 255, 255, 0.6);
				box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
					-6px -6px 12px rgba(255, 255, 255, 0.8);
				border-radius: 18px;
				padding: 0.8rem 2rem;
				margin: 0.5rem 0;
			}
		}
	}
`;

const PickUpAtLocation = props => {
	const router = useRouter();
	const handleAtLocation = async e => {
		e.preventDefault();
		try {
			router.push("/hasbeenmatched");
			//const res = await axios.post("/")
		} catch (error) {
			console.log(error);
		}
	};

	const handlePickUp = async e => {
		e.preventDefault();
		try {
			router.push("/hasbeenmatched");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<StyledPickUpAtLocation>
			<div className={`container ${props.addPopUp}`}>
				<p>Where do you want to meet the Agent?</p>
				<div className="btn-container">
					<button className="btn" onClick={handleAtLocation}>
						At Location
					</button>
					<button className="btn" onClick={handlePickUp}>
						Pick me Up
					</button>
				</div>
			</div>
		</StyledPickUpAtLocation>
	);
};

export default PickUpAtLocation;
