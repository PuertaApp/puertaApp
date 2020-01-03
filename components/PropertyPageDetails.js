import React from "react";
import styled from "styled-components";
import HeartIconFilled from "./icons/HeartIconFilled";
import EyeIcon from "./icons/EyeIcon";

const PropertyPageDetailsStyles = styled.div`
	.house-details-top {
		padding-left: 10px;
		h3 {
			font-family: Fira Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 45px;
			line-height: 67px;
			color: #141940;
			margin: 15px 0px;
		}
		h4 {
			font-family: Fira Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 32px;
			line-height: 38px;
			margin: 15px 0px;
			color: rgba(20, 25, 64, 0.9);
		}
		.house-availability {
			position: relative;
			display: flex;
			align-content: center;
			justify-content: flex-start;
			align-self: baseline;
			bottom: 0;
			margin-top: 55px;
			.status {
				height: 15px;
				width: 15px;
				background-color: #78e08f;
				border-radius: 50%;
			}
			p {
				font-family: Fira Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 18px;
				line-height: 19px;
				color: #141940;
				opacity: 0.5;
				margin: 0px 5px;
			}
		}
		.house-info {
			display: flex;
			justify-content: space-between;
			align-content: center;
			margin-right: 20px;
			font-size: 0.8rem;
			width: 200px;
			p {
				font-family: Fira Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 18px;
				line-height: 16px;
				color: rgba(20, 25, 64, 0.7);
				opacity: 0.7;
				margin: 0;
			}
		}
	}
	.house-details-middle {
    margin-top: 2rem;
		padding-left: 10px;
		.user-favorite-svg,
		.user-dislike-svg {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-right: 15px;
			margin-top: 2rem;
			svg {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-right: 15px;
				background: linear-gradient(
					130.38deg,
					#fafafa 0%,
					#f5f5f5 100.03%
				);
				border: 1px solid rgba(255, 255, 255, 0.6);
				box-sizing: border-box;
				border-radius: 10px;
				box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
					-6px -6px 12px rgba(255, 255, 255, 0.8);
				padding: 10px;
			}
			p {
				font-family: Fira Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 20px;
				line-height: 34px;
				/* identical to box height */
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}
	.house-details-bottom {
    margin-top: 3rem;
		padding: 0px 0px 0px 10px;
		p {
			font-family: Fira Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 34px;

			color: #141940;
		}
	}
`;


function PropertyPageDetails() {
	return (
		<PropertyPageDetailsStyles>
			<div className="house-details-top">
				<h3>$ 374900</h3>
				<h4>1234 Millers Rd, Cleveland, OH 44066</h4>
				<div className="house-info">
					<p className="bds"> 4 bds {" | "} </p>
					<p className="brs"> 3 brs </p>
					<p className="sqft"> {" | "}2839 sqft</p>
				</div>
				<div className="house-availability">
					<div className="status"></div>
					<p>House available for showings now</p>
				</div>
			</div>
			<div className="house-details-middle">
				<div className="user-favorite-svg">
					<HeartIconFilled width={60} height={60} />
					<p>Click to favorite this property</p>
				</div>
				<div className="user-dislike-svg">
					<EyeIcon width={60} height={60} />
					<p>Click to dislike this property</p>
				</div>
			</div>
			<div className="house-details-bottom">
				<p>
					This 2,830 square foot single family home has 4 bedrooms and
					3.0 bathrooms. It is located at 1234 Millers Rd, Cleveland,
					Ohio.
				</p>
			</div>
		</PropertyPageDetailsStyles>
	);
}

export default PropertyPageDetails;

