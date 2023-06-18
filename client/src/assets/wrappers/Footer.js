import styled from 'styled-components'

const Wrapper = styled.footer`
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-footer);
  }

  .footer-copyright {
    margin-top: 2rem;
    text-align: center;
    width: 100%;
  }

  .footer-copyright p {
    font-size: 20px;
    font-family: var(--font-family);
    line-height: 25px;
    color: black;
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
