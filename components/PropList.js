import PropertyCard from './PropertyCard';
import styled from 'styled-components';

const StyledList = styled.ul` 
    height: 75%;
    width: 80%;
    border: 2px solid red    
`
const PropertyList = () => {
    return(
        <StyledList >
            <li>
        <PropertyCard />
        </li>
        <li>
        <PropertyCard />
        </li>
        <li>
        <PropertyCard />
        </li>
        </StyledList>
    )
}

export default PropertyList;