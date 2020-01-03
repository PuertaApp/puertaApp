import PropertyCard from './PropertyCard';
import styled from 'styled-components';
import MapIcon from './icons/MapIcon'
import MapButton from './styles/MapButton'
import Link from 'next/link';

const StyledList = styled.div` 
  
    width: 80%;
    border: 2px solid red  ;
    margin: 10%  ;
    margin-top: 5%;
    display: flex;
    flex-direction: column
    .card {
        margin: 22px 0;
       
    }
`
const PropertyList = () => {
    return(
        <>
        <Link href="/map">
        <MapButton>
        <MapIcon />
        </MapButton>
        </Link>
        <StyledList >
           
        <div className= "card">
        <PropertyCard />
        </div>
        <div className= "card">
        <PropertyCard />
        </div>
        <div className= "card">
        <PropertyCard />
        </div>

        </StyledList>
        </>
    )
}

export default PropertyList;