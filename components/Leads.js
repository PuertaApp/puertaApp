import styled from 'styled-components';
import CaratUp from '../components/icons/CaratUp';

const StyledDiv = styled.div`
display: flex;

justify-content: space-between;
margin: 22px 0;
margin-left: 10%;
padding: 1rem 2rem;
align-content: center;
background: linear-gradient(165.12deg, #fafafa 0%, #f5f5f5 100.03%);
border: 1px solid rgba(255, 255, 255, 0.6);
box-shadow: 12px 12px 24px rgba(170, 182, 209, 0.4),
    -12px -12px 24px #ffffff;
border-radius: 33px;

max-width: 600px;
div{
    display:flex;
    flex-direction: column
}
`

const StyledButton = styled.button`
width: 44px;
height: 44px;
color: #96a5c7;
z-index: 1000;
background: #f9f9f9;

  display: flex;
  justify-content: 
  align-items: center;
  padding: 0.5em 0;
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4),
    -6px -6px 10px rgba(255, 255, 255, 0.8);
  border-radius: 26px;
    :active{
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
        inset 2px 2px 8px rgba(126, 138, 167, 0.4), inset -4px -4px 10px #ffffff;
    }
`
const StyledImg = styled.img`
    flex-grow: 1;
    width: 13vw;
    height: 100%
    max-width: 120px;
    border-radius: 25% 0 0 25%;
`

const Leads = () => {
    return(
        <>
        <StyledDiv>
            <StyledImg src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80"/>
            <div>
            <h2>Scottie</h2>
            <h4>Added 3 hrs ago</h4>
            </div>
            <StyledButton>
            <CaratUp />
            </StyledButton>
        </StyledDiv>
        <StyledDiv>
        <img/>
        <div>
        <h2>Rob</h2>
        <h4>Added 5 hrs ago</h4>
        </div>
        <StyledButton>
        <CaratUp />
        </StyledButton>
    </StyledDiv>
    </>
    )
}

export default Leads;