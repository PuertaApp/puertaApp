import styled from 'styled-components'
import Button from './Button';

const MeetPopupStyles = styled.div`
  border: 1px solid red;
  z-index: 1050;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity:0;
  -webkit-transition: opacity 100ms ease-in;
  -moz-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  pointer-events: none;
`
const MeetPopup = (props) => (
  <MeetPopupStyles>
    <h2>Where do you want to meet the agent?</h2>
    <Button text="at location" />
    <Button text="pick me up" />
  </MeetPopupStyles>
)

export default MeetPopup;