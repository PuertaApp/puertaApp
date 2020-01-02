import styled from "styled-components";

const StyledAgentCard = styled.div`
	.container {
		display: flex;
		justify-content: space-between;
		max-width: 550px;

		background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
		border: 1px solid rgba(255, 255, 255, 0.6);
		box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
			-12px -12px 24px #ffffff;
		border-radius: 33px;
		.card-img {
			flex-grow: 1;
			img {
				height: 100%;
				width: 100%
				border-top-left-radius: 33px;
				border-bottom-left-radius: 33px;
			}
		}
		.card-text {
			font-family: ${props => props.theme.font};
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 0 1rem;
			h4 {
				font-size: 30px;
				margin: 1rem 0;
				color: #141940;
			}
			p {
				color: rgba(20, 25, 64, 0.7);
				font-size: 22px;
			}

			.small-text-container {
				display: flex;
				justify-content: space-between;
				.small {
					font-size: 16px;
				}

				.availability-container {
					display: flex;
					align-items: center;
					.status-icon {
						margin-left: 1rem;
						display: inline-block;
						height: 18px;
						width: 18px;
						border-radius: 50%;
						background: #78e08f;
					}
				}
			}
		}
		.card-dropdown-container {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-grow: 1;

			button {
				width: 90px;
				height: 90px;
				background: linear-gradient(
					129.61deg,
					#fafafa 0%,
					#f5f5f5 100.03%
				);
				border: 1px solid rgba(255, 255, 255, 0.6);
				box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
					-6px -6px 12px rgba(255, 255, 255, 0.8);
				border-radius: 23px;
			}
		}
	}
`;

const AgentCard = props => {
	const { agent } = props;

	return (
		<StyledAgentCard>
			<div className="container">
				<div className="card-img">
					<img
						src="https://via.placeholder.com/80"
						alt="agent image"
					/>
				</div>
				<div className="card-text">
					<h4>Sebastian Garces</h4>
					<div className="small-text-container">
						<p className="small">15 Recent Sales</p>
						<div className="availability-container">
							<p className="small">Available</p>
							<div className="status-icon"></div>
						</div>
					</div>
				</div>
				<div className="card-dropdown-container">
					<button>D</button>
				</div>
			</div>
		</StyledAgentCard>
	);
};

export default AgentCard;
