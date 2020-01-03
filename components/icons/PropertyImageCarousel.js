import React, {useState} from 'react';

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
        <div className='image-div' onClick={handleNextImage}>
           {!image 
                ? 
            <h3>No Property Image to display </h3> 
                : 
            <img src={`${image[imageCount]}`}/>} 
            <div>
                <button onClick={handlePrevImage}>Prev</button>
                <button onClick={handleNextImage}>Next</button>
            </div>
        </div>
    )
}

export default PropertyImageCarousel
