import React, { useState } from "react";
import CalendarIcon from "./icons/CalendarIcon";
import styled from "styled-components";

export default function PropertyPageTimes(props) {
	return (
		<PropertyPageTimesStyles>
			<div className="times">
				<div
					className="icon"
					onClick={() => {
						props.setAddModal(!props.addModal);
						props.setTime("3:00PM");
					}}
				>
					<CalendarIcon className="icon" />
				</div>
				<p>3:00 pm</p>
			</div>

			<div className="times">
				<div
					className="icon"
					onClick={() => {
						props.setAddModal(!props.addModal);
						props.setTime("4:00PM");
					}}
				>
					<CalendarIcon className="icon" />
				</div>
				<p>4:00 pm</p>
			</div>

			<div className="times">
				<div
					className="icon"
					onClick={() => {
						props.setAddModal(!props.addModal);
						props.setTime("5:00PM");
					}}
				>
					<CalendarIcon className="icon" />
				</div>
				<p>5:00 pm</p>
			</div>
		</PropertyPageTimesStyles>
	);
}

const PropertyPageTimesStyles = styled.div`
	width: 100%;
	margin: 0 auto;
	border: 1px solid white;
	height: 100%;
	background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
	border-radius: 41px;
	box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
		-12px -12px 24px #ffffff;
	margin-top: 3rem;
	.times {
		margin: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		.icon {
			padding: 0.5rem;
			background: linear-gradient(129.61deg, #fafafa 0%, #f5f5f5 100.03%);
			border: 1px solid rgba(255, 255, 255, 0.6);
			box-sizing: border-box;
			/* outter shadow */

			box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
				-6px -6px 12px rgba(255, 255, 255, 0.8);
			border-radius: 23px;
		}
		p {
			font-family: Fira Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 28px;
			line-height: 16px;
			color: rgba(20, 25, 64, 0.7);
			opacity: 0.7;
			margin: 0;
			margin-right: 1rem;
		}
	}
`;
