import React from 'react';
import styled from 'styled-components';
import PropertyImageCarousel from './PropertyImageCarousel';

function PropertyPage() {
    return (
        <PropertyPageStyles>
            <PropertyImageCarousel />
        </PropertyPageStyles>
    )
}

export default PropertyPage;

const PropertyPageStyles = styled.div`

`;
