import styled from "styled-components";

const StyledAgentCard = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Fira+Sans&display=swap");

	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 auto;
		padding: 1rem 2rem;

		background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
		border: 1px solid rgba(255, 255, 255, 0.6);
		box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
			-12px -12px 24px #ffffff;
		border-radius: 33px;

		max-width: 600px;

		.collapsed-container {
			display: flex;
			justify-content: space-between;
			max-height: 120px;
			max-width: 650px;

			.card-img {
				flex-grow: 1;
				width: 13vw;
				height: 100%;
				max-width: 120px;
				img {
					height: 100%;
					max-height: 100%;
					width: 100%;
					border-radius: 25%;
				}
			}

			.card-text {
				font-family: "Fira Sans", sans-serif;
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				margin: 0 1rem;
				h4 {
					font-size: 5vw;
					margin: 0;
					color: #141940;
				}

				p {
					margin: 0;
				}

				.small-text-container {
					display: flex;
					flex-direction: column;
					.small {
						font-size: 16px;
						color: rgba(20, 25, 64, 0.7);
					}

					.availability-container {
						display: flex;
						align-items: center;
						margin: 0.5rem 0;
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
		}

		.expanded-container {
			.agent-phone {
				color: rgba(20, 25, 64, 0.7);
				font-size: 22px;
				font-family: "Fira Sans", sans-serif;
			}
			.agent-headline {
				color: rgba(20, 25, 64, 0.9);
				font-size: 26px;
				font-family: "Fira Sans", sans-serif;
				margin: 2rem 0 1rem 0;
			}
			.agent-description {
				color: rgba(20, 25, 64, 0.7);
				font-size: 20px;
				font-family: "Fira Sans", sans-serif;
			}
		}

		button {
			height: 15vw;
			width: 80%;
			align-self: center;
			background: linear-gradient(129.61deg, #fafafa 0%, #f5f5f5 100.03%);
			border: 1px solid rgba(255, 255, 255, 0.6);
			box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
				-6px -6px 12px rgba(255, 255, 255, 0.8);
			border-radius: 15px;
			color: rgba(20, 25, 64, 1);
			font-size: 1.2rem;
		}
	}

	@media (min-width: 600px) {
		.container {
			.collapsed-container {
				.card-text {
					h4 {
						font-size: 30px;
					}
				}
			}
		}
	}

	@media (max-width: 450px) {
		.container {
			border-radius: 25px;

			.card-img {
				img {
					border-top-left-radius: 25px;
					border-bottom-left-radius: 25px;
				}
			}
			.collapsed-container {
				.card-text {
					h4 {
						font-size: 5vw;
					}
					.small-text-container {
						.small {
							font-size: 4vw;
						}

						.availability-container {
							.status-icon {
								height: 10px;
								width: 10px;
							}
						}
					}
				}
			}

			.card-dropdown-container {
				button {
					border-radius: 15%;
				}
			}

			.expanded-container {
				.agent-phone {
					font-size: 16px;
				}
				.agent-headline {
					font-size: 18px;
				}
				.agent-description {
					font-size: 16px;
				}
			}
		}
	}
`;

const AgentCard = props => {
	const { agent } = props;

	return (
		<StyledAgentCard>
			<div className="container">
				<div className="collapsed-container">
					<div className="card-img">
						<img
							src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"
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
				</div>
				<div className="expanded-container">
					<p className="agent-phone">Phone: (357) 559-8413</p>
					<h5 className="agent-headline">
						This is the awesome headline
					</h5>
					<p className="agent-description">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Quaerat repellat, aperiam deleniti iusto quibusdam
						perspiciatis nostrum fugit enim doloribus cum.
					</p>
				</div>
				<button>Contact</button>
			</div>
		</StyledAgentCard>
	);
};

export default AgentCard;
