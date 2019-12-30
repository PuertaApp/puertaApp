import styled from 'styled-components'

const FloatingSearchForm = styled.div`
  /* The Floating Form */
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 100vw;    
  margin: 0 auto;
  overflow: hidden;
  .search-form {
    background-color: #fff;
    padding: 2rem 1.5rem 2rem 1.5rem;
    border-radius: 5px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 90%;
    grid-template-columns: 2fr 1fr;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 1rem;
    .search-form {
      margin-left: 0;
    } 
  }
  
  .search-form h1 {
    margin: 0 0 1rem 0;
  }

  .search-form form {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
  }
  .search-form .field {
    /** Position from the parent element **/
    grid-column: 1 / 3;
    /** Position the labels **/
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: .5rem;
  }
  .search-form .date {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: .5rem;
  }
  .search-form .date {
    grid-row: 2 / 3; 
  }
  .search-form .date:nth-child(1) {
    grid-column: 1 / 2;
  }
  .search-form .date:nth-child(2) {
    grid-column: 2 / 3;
  }
  .search-form label {
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: bold;
  }
  .search-form input[type="text"],
  .search-form input[type="email"],
  .search-form select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: .8rem;
    border: 1px solid #e1e1e1;
    background-color: white;
    overflow: hidden !important;
  }
  .submit {
    grid-column: 2 / 3;
    display: grid;
    justify-content: flex-end;
  }
  .submitBtn {
    background-color: rgb(255, 90, 95);
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    border:none;
  }
  /* End Floating Form */
`
export default FloatingSearchForm;