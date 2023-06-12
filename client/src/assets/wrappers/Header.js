import styled from 'styled-components'

const Wrapper = styled.div`
{*/ Breakpoints ===> (480px, 768px, 1024px, and 1280px)*/}

  .page {
    min-height: cals(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }

  h1 {
    font-weight: 700;
    font-family: var(--bodyFont);
    span {
      color: var(--primary-500);
    }
  }

  .main-img {
      display: block;
    }

  @media screen and (max-width: 1050px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }

  @media screen and (max-width: 650px) {
    .page {
      min-height: cals(100vh - var(--nav-height));
      display: grid;
      align-items: center;
    }
  
    .main-img {
      display: none;
    }
  }

  @media screen and (max-width: 490px) {
    .page {
      min-height: cals(100vh - var(--nav-height));
      display: grid;
      align-items: center;
    }
    
    .main-img {
      display: none;
    }
  }
`
export default Wrapper
