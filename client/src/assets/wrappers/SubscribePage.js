import styled from 'styled-components'

const Wrapper = styled.section` 
  .subscribe-page {
    display: grid;
    align-items: center;
    margin-top: .2rem;
    padding-top: 2rem;
  }

  h1 {
    text-align: center;
  }

  .subscription-subheading {
    margin: 0;
    padding: 0 0 .5rem 0;
    text-align: center;
  }

  .link-to-newsletter{
    color: var(--white);
    text-align: center;
    text-decoration: underline;
  }

  .form {
    margin-top: 1.5rem;
    max-width: 400px;
    border-top: 5px solid var(--dark-yellow);
    display: grid;
    align-items: center;
    color: black;
  }

  .form-input {
    background-color: white;
  }

  h4 {
    text-align: center;
    color: var(--navy-blue);
  }

  .login-register-link {
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