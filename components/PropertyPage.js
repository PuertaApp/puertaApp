import React from 'react';
import styled from 'styled-components';
import PropertyImageCarousel from './PropertyImageCarousel';
import PropertyPageDetails from './PropertyPageDetails';

function PropertyPage() {
    return (
        <PropertyPageStyles>
            <PropertyImageCarousel />
            <PropertyPageDetails />
        </PropertyPageStyles>
    )
}

export default PropertyPage;

const PropertyPageStyles = styled.div`
    width: 542px;
    margin: 0 auto;
    border: 1px solid lightgrey;
    height: 100%;
`;
