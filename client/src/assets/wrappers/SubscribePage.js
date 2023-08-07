import styled from 'styled-components'

const Wrapper = styled.section` 
  .subscribe-page {
    min-height: cals(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 4rem;
    padding-top: 2.5rem;
  }

  h1 {
    text-align: center;
  }

  .subscription-subheading {
    font-size: var(--large-text);
    text-align: center;
  }

  .link-to-newsletter{
    color: var(--white);
    text-align: center;
    text-decoration: underline;
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