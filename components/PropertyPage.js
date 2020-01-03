import React from 'react';
import styled from 'styled-components';
import PropertyImageCarousel from './PropertyImageCarousel';
import PropertyPageDetails from './PropertyPageDetails';
import PropertyPageTimes from './PropertyPageTimes';
import PropertyPageProperties from './PropertyPageProperties';

function PropertyPage() {
    return (
        <PropertyPageStyles>
            <PropertyImageCarousel />
            <PropertyPageDetails />
            <PropertyPageTimes />
            <PropertyPageProperties />
        </PropertyPageStyles>
    )
}

export default PropertyPage;

const PropertyPageStyles = styled.div`
    width: 542px;
    margin: 0 auto;
    border: 1px solid lightgrey;
    height: 100%;
    background: #e5e5e5;
`;
