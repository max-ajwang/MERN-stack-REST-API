import styled from 'styled-components'

const Wrapper = styled.main`
{*/ New Breakpoints ===> (480px, 768px, 1024px, and 1280px)*/}


  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: var(--font-family);

  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`

export default Wrapper