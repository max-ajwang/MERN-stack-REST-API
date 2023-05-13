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
    font-size: 15px;
    font-family: var(--font-family);
    line-height: 15px;
    color: #fff;
  }

  @media screen and (max-width: 850px) {
    
  }

  @media screen and (max-width: 550px) {
    
  }

  @media screen and (max-width: 400px) {
   
  }
`

export default Wrapper
