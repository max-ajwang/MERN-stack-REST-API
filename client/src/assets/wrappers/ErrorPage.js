import styled from 'styled-components'

const Wrapper = styled.main`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: var(--font-family);

  img {
    max-width: 600px;
    width: 100%;
    display: block;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-family: var(--font-family);
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: var(--font-family);
  }
  
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
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