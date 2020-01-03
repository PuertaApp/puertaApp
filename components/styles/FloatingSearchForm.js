import styled from 'styled-components'

const FloatingSearchForm = styled.div`
  /* The Floating Form */
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100vw;    
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  h1 {
    font-size: 3rem;
  }
  .search-form {
    padding: 2rem 1.5rem 2rem 1.5rem;
    border-radius: 5px;
    margin: 0 auto;
  }
  .search-form .button {
    margin-top: 10px;
  }
`
export default FloatingSearchForm;