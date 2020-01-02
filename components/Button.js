import React from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.div`
  width: 284px;
  height: 70px;
  border: 2px solid rgba(255, 255, 255, 0.9);
  /* outter shadow */
  box-shadow: 4px 4px 8px rgba(170, 182, 209, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.8);
  border-radius: 26px;
  background-color: #f9f9f9;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #111535;
  &:active {
    /* pressed button / field */
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), inset 2px 2px 8px rgba(126, 138, 167, 0.4), inset -4px -4px 10px rgba(255, 255, 255, 0.7);
  }
`

const Button = (props) => (
  <ButtonStyle>
    {props.text}
  </ButtonStyle>
)

export default Button;