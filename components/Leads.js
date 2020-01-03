import styled from 'styled-components';
import CaratUp from '../components/icons/CaratUp';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0 auto;
padding: 1rem 2rem;

background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
border: 1px solid rgba(255, 255, 255, 0.6);
box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
    -12px -12px 24px #ffffff;
border-radius: 33px;

max-width: 600px;
`

const Leads = () => {
    return(
        <StyledDiv>
            <img/>
            <h2>Scottie</h2>
            <h4>Added 3 hrs ago</h4>
            <button>
            <CaratUp />
            </button>
        </StyledDiv>
    )
}

export default Leads;