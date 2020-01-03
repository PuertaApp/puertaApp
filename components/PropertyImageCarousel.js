import React, {useState} from 'react';
import styled from 'styled-components'

function PropertyImageCarousel() {
    const[imageCount, setImageCount ] = useState(0);
    const[image, setImage] = useState([
        'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1577083164837-7082127bd3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1577988504339-4dc891bdabe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

    ]);


    const handleNextImage = e => {
        e.preventDefault();
        if(imageCount === image.length -1 ){
            setImageCount(0);
        }else{
            setImageCount(imageCount + 1 );
        }           
    }
    const handlePrevImage = e => {
        e.preventDefault();
        if(imageCount <= 0 ){
            setImageCount(0);
        }else{
            setImageCount(imageCount - 1 );
        }           
    }
    return (
        <ImageStyles className='image-div' onClick={handleNextImage}>
           {!image 
                ? 
            <h3>No Property Image to display </h3> 
                : 
            <img src={`${image[imageCount]}`}/>} 
            <div className='controls'>
                <button onClick={handlePrevImage}>Prev</button>
                <button onClick={handleNextImage}>Next</button>
            </div>
        </ImageStyles>
    )
}

export default PropertyImageCarousel

const ImageStyles = styled.div`
    width: 532px;
    margin: 0 auto;
    border: 1px solid lightgrey;
   img{ 
        width: 100%;
        height: 100%;
        border-radius: 41px;
        }

    .controls{
        display: flex;
        justify-content: space-between;
        button{
            display: flex;
             justify-content: flex-start;
            align-items: center;
            background: linear-gradient(130.38deg, #FAFAFA 0%, #F5F5F5 100.03%);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-sizing: border-box;
            border-radius: 10px;
            box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.8);
            height:50px;
            width: 50px;
        }
    }
`