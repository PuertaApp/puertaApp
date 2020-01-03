import styled from 'styled-components';

const MapButton = styled.button `
width: 63px;
height: 63px;
color: #96a5c7;
z-index: 1000;
top: 10px;
right: 10px;
position: fixed;
background: #f9f9f9;
  display: flex;
  justify-content: center;
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

export default MapButton;