import React from 'react'
import PropertyPageDetails from './PropertyPageDetails'
import styled from 'styled-components';

export default function PropertyPageProperties() {
    return (
        <PropertyPagePropertiesStyles>
            <h1>Similar Homes in the area</h1>
            <PropertyPageDetails/>
            <hr/>
            <PropertyPageDetails/>
            <hr/>
            <PropertyPageDetails/>
            <hr/>
            <PropertyPageDetails/>
        </PropertyPagePropertiesStyles>
    )
}

const PropertyPagePropertiesStyles = styled.div`

    margin: 0 auto;
    padding-top: 5vh;
    h1{
        text-align: center;
        margin: 5rem 0;
    }
    hr{
        margin: 5rem 0;
    }

`;
