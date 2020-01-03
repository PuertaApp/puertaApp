import React from "react";
import styled from "styled-components";
import PropertyImageCarousel from "./PropertyImageCarousel";
import PropertyPageDetails from "./PropertyPageDetails";
import PropertyPageTimes from "./PropertyPageTimes";
import PropertyPageProperties from "./PropertyPageProperties";
import PickUpAtLocation from "../components/PickUpAtLocation";
import { useState } from "react";

function PropertyPage() {
	const [addModal, setAddModal] = useState(false);
	const [time, setTime] = useState("");

	return (
		<PropertyPageStyles>
			<PropertyImageCarousel />
			<PropertyPageDetails />
			<PropertyPageTimes
				addModal={addModal}
				setAddModal={setAddModal}
				setTime={setTime}
			/>
			<PropertyPageProperties />
			<PickUpAtLocationStyles>
				<PickUpAtLocation
					addPopUp={addModal ? "modal-popup" : ""}
					time={time}
				/>
			</PickUpAtLocationStyles>
		</PropertyPageStyles>
	);
}

export default PropertyPage;

const PickUpAtLocationStyles = styled.div`
	position: fixed;
	top: 50vh;
	left: 10%;

	.modal-popup {
		display: block;
		opacity: 1;
	}
`;

const PropertyPageStyles = styled.div`
	width: 100%;
	margin: 0 auto;
	height: 100%;
	background: #f5f5f5;
	padding: 1rem;
`;
