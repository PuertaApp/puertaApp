import React, { useState } from "react";
import styled from "styled-components";
import CaratLeft from "./icons/CaratLeft";
import CaratRight from "./icons/CaratRight";

const ImageStyles = styled.div`
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
	img {
		width: 100%;
		height: 100%;
		border-radius: 41px;
	}
	.controls {
		display: flex;
		justify-content: space-between;
		button {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background: linear-gradient(130.38deg, #fafafa 0%, #f5f5f5 100.03%);
			border: 1px solid rgba(255, 255, 255, 0.6);
			box-sizing: border-box;
			border-radius: 10px;
			box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
				-6px -6px 12px rgba(255, 255, 255, 0.8);
			height: 50px;
			padding: 0 15px;
		}
	}
`;
function PropertyImageCarousel() {
	const [imageCount, setImageCount] = useState(0);
	const [image, setImage] = useState([
		"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575420822/Raices/Apartment%20%28samples%29/apartment3.jpg",
		"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg",
		"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575420822/Raices/Apartment%20%28samples%29/apartment5.jpg"
	]);

	const handleNextImage = e => {
		e.preventDefault();
		if (imageCount === image.length - 1) {
			setImageCount(0);
		} else {
			setImageCount(imageCount + 1);
		}
	};
	const handlePrevImage = e => {
		e.preventDefault();
		if (imageCount <= 0) {
			setImageCount(0);
		} else {
			setImageCount(imageCount - 1);
		}
	};
	return (
		<ImageStyles className="image-div" onClick={handleNextImage}>
			{!image ? (
				<h3>No Property Image to display </h3>
			) : (
				<img src={`${image[imageCount]}`} />
			)}
			{/* <div className="controls">
				<button onClick={handlePrevImage}>
					<CaratLeft />
				</button>
				<button onClick={handleNextImage}>
					<CaratRight />
				</button>
			</div> */}
		</ImageStyles>
	);
}

export default PropertyImageCarousel;


