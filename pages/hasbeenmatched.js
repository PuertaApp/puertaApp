import styled from "styled-components";
import { useRef } from "react";
import { useRouter } from "next/router";

const StyledHasBeenMatched = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700&display=swap");

	font-family: "Fira Sans", sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		width: 90%;
		background: linear-gradient(120.51deg, #fafafa 0%, #f5f5f5 100.03%);
		border: 1px solid #ffffff;
		box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
			-12px -12px 24px rgba(255, 255, 255, 0.7);
		border-radius: 41px;

		.thank-you {
			font-size: 1.5rem;
			font-weight: 700;
			margin: 0;
		}

		p {
			text-align: center;
			color: rgba(20, 25, 64, 0.5);
			margin: 2rem 0;
		}

		.agent-container {
			background: linear-gradient(134.16deg, #fafafa 0%, #f5f5f5 100.03%);
			border: 1px solid rgba(255, 255, 255, 0.6);
			box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
				-12px -12px 24px #ffffff;
			border-radius: 33px;
			padding: 1rem 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			img,
			h3,
			p {
				margin: 0;
			}

			img {
				border-radius: 33px;
			}

			h3 {
				margin: 1rem 0;
				margin-bottom: 0.7rem;
				font-size: 1.5rem;
				font-weight: 400;
				text-align: center;
			}

			.phone {
				margin-bottom: 0.4rem;
			}
		}

		button {
			background: linear-gradient(168.5deg, #fafafa 0%, #f5f5f5 100.03%);
			border: 1px solid rgba(255, 255, 255, 0.6);
			box-sizing: border-box;
			box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
				-6px -6px 12px rgba(255, 255, 255, 0.8);
			border-radius: 18px;
			margin-top: 2rem;
			padding: 0.8rem 2rem;
			color: rgba(20, 25, 64, 1);
			font-size: 1.3rem;

			&:active {
				background: #f9f9f9;
				border: 3px solid #ffffff;
				box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
					inset 2px 2px 8px rgba(126, 138, 167, 0.4),
					inset -4px -4px 10px rgba(255, 255, 255, 0.7);
			}
		}
	}
`;

const HasBeenMatched = () => {
	const router = useRouter();
	return (
		<StyledHasBeenMatched>
			<div className="container">
				<h4 className="thank-you">Thank you!</h4>
				<p>
					You have been matched with our Agent Sebastian Garces. We
					will let you know as soon as he confirms.
				</p>
				<div className="agent-container">
					<img src="https://picsum.photos/110" alt="agent picture" />
					<h3>Sebastian Garces</h3>
					<p className="phone">(357) 559-8413</p>
					<p>15 Recent Sales</p>
				</div>
				<button onClick={() => router.push("/propertypage")}>
					back to property
				</button>
			</div>
		</StyledHasBeenMatched>
	);
};

export default HasBeenMatched;
