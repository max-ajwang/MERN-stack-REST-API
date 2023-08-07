import styled from 'styled-components'

const Wrapper = styled.section`
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }

  .form {
    max-width: 400px;
    border-top: 5px solid var(--dark-yellow);
    display: grid;
    align-items: center;
    color: black;
  }

  .form-input {
    background-color: white;
  }

  h3 {
    text-align: center;
    color: var(--navy-blue);
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
    color: var(--navy-blue);
  }

  .btn {
    margin-top: 1rem;
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  @media screen and (max-width: 1280px) {
  
  }

  @media screen and (max-width: 1024px) {
  
  }

  @media screen and (max-width: 768px) {
  
  }

  @media screen and (max-width: 480px) {
  
  }
`
export default Wrapper