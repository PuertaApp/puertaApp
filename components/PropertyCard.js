import React from 'react';
import styled from 'styled-components';

function PropertyCard() {
    return (
        <PropertyCardStyles>
            <div className='container'>
                <div className='property-card-image'>
                    <img src='https://via.placeholder.com/532/' alt='Property Image'/>
                </div>
            </div>
        </PropertyCardStyles>
    )
}

export default PropertyCard

const PropertyCardStyles = styled.div`
    width: 532px;
    height: 671px;
   .container{ 
        width: 100%;
        height: 100%;
        border-radius: 41px;
        background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
		box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
			-12px -12px 24px #ffffff;
        .property-card-image{
            height: 400px;
            img{
                border-radius: 41px;
                width: 100%;
                height: 100%
            }
            }
        }

`;