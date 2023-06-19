import styled from 'styled-components'

const Wrapper = styled.footer`
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--grey-100);
    margin-top: 30px;
  }

  .footer-copyright {
    margin-top: 2rem;
    text-align: center;
    width: 100%;
  }

  .footer-copyright p {
    font-size: 15px;
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
