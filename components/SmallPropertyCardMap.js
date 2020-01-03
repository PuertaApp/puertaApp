import styled from "styled-components";

const StyledSmallPropertyCardMap = styled.div`
	justify-content: center;
  display: flex;
	.container {
		background: linear-gradient(119.26deg, #fafafa 0%, #f5f5f5 100.03%);
		box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4);
		border-radius: 20px;

		img {
			border-top-right-radius: 20px;
			border-top-left-radius: 20px;
		}

		.text-container {
			padding: 0 0.7rem;

			.price-container {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin: 0.1rem;

				h4 {
					font-size: 1.4rem;
					color: #141940;
				}

				.dot {
					height: 18px;
					width: 18px;
					background: #78e08f;
					border-radius: 50%;
					margin: 0.5rem;
				}
			}

			p {
				color: rgba(20, 25, 64, 0.8);
				font-size: 1rem;
			}

			.address {
				font-size: 1.2rem;
				margin: 0.8rem 0;
			}
		}
	}
`;

const SmallPropertyCardMap = (props) => {
	return (
		<StyledSmallPropertyCardMap show={props.show}>
			<div className="container">
				<img src="https://picsum.photos/160/120" alt="property image" />
				<div className="text-container">
					<div className="price-container">
						<h4 className="price">$ 374,900</h4>
						<div className="dot"></div>
					</div>
					<p className="stats">4 bds | 3 brs</p>
					<p className="size">2,830 sqft</p>
					<p className="address">1234 Millers Rd</p>
				</div>
			</div>
		</StyledSmallPropertyCardMap>
	);
};

export default SmallPropertyCardMap;
