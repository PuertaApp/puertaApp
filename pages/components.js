
import styled from 'styled-components';
import Button from '../components/Button';

const ComponentsStyle = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
`
const Components = () => {
  return (
    <ComponentsStyle>
      Components
      <Button text="Sign-In"/>
      <Button text="New User"/>
    </ComponentsStyle>
  )
}
export default Components;