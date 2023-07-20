import styled from 'styled-components'

const Wrapper = styled.footer`
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--navy-blue);
    margin: 0, 0, 0, 0;
    border-top: 0.005rem solid var(--dark-yellow);
  }

  .footer-copyright {
    text-align: center;
    width: 100%;
  }

  .footer-copyright p {
    font-size: 15px;
    font-family: var(--font-family);
    line-height: 25px;
    color: white;
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
