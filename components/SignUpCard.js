import styled from "styled-components";

const StyledSignUpCard = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Fira+Sans&display=swap");

	.container {
		background: linear-gradient(119.36deg, #fcfcfc 0%, #f5f5f5 100%);
		border: 3px solid #ffffff;
		box-sizing: border-box;
		box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
			-12px -12px 24px #ffffff;
		border-radius: 45px;
		padding: 0rem 2rem 1rem;
		max-width: 400px;
		margin: 0 auto;

		form {
			display: flex;
			flex-direction: column;
			justify-content: center;
			ul {
				padding: 0;
				li {
					display: flex;
					flex-direction: column;

					label {
						margin: 1rem 0 0.5rem 1rem;
						color: #96a5c7;
						font-size: 20px;
						font-family: "Fira Sans", sans-serif;
					}

					input {
						background: #f9f9f9;
						border: 3px solid #ffffff;
						box-sizing: border-box;
						box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
							inset 2px 2px 8px rgba(126, 138, 167, 0.4),
							inset -4px -4px 10px rgba(255, 255, 255, 0.7);
						border-radius: 26px;
						padding: 1.2rem 1rem;

						&::placeholder {
							color: rgba(150, 165, 199, 0.5);
							font-size: 1rem;
						}
					}
				}
			}

			.btn-container {
				display: flex;
				flex-direction: column;
				align-items: center;

				.btn {
					padding: 0.8rem 2rem;
					font-family: "Fira Sans", sans-serif;
					font-size: 1.3rem;
					background: #f9f9f9;
					border: 2px solid rgba(255, 255, 255, 0.9);
					box-sizing: border-box;
					box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
						-6px -6px 12px rgba(255, 255, 255, 0.8);
					border-radius: 26px;
				}

				.small-btn {
					padding: 0.5rem 2rem;
					margin-top: 1rem;
				}

				.btn:active {
					background: #f9f9f9;
					border: 3px solid #ffffff;
					box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
						inset 2px 2px 8px rgba(126, 138, 167, 0.4),
						inset -4px -4px 10px rgba(255, 255, 255, 0.7);
					border-radius: 26px;
				}
			}
		}
	}
`;

const SignUpCard = props => {
	const submitForm = event => {
		event.preventDefault();
		props.e();
	};
	return (
		<StyledSignUpCard>
			<div className="container">
				<form>
					<ul>
						<li>
							<label htmlFor="name">Full Name:</label>
							<input
								type="text"
								id="name"
								placeholder="Please enter your full name..."
							/>
						</li>
						<li>
							<label htmlFor="phone-number">Phone Number:</label>
							<input
								type="text"
								id="phone-number"
								placeholder="Please enter your phone number..."
							/>
						</li>
					</ul>
					<div className="btn-container">
						<button className="btn" onClick={submitForm}>
							Create Account
						</button>
						<button className="btn small-btn" onClick={submitForm}>
							Back
						</button>
					</div>
				</form>
			</div>
		</StyledSignUpCard>
	);
};

export default SignUpCard;
