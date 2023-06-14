import styled from 'styled-components'

const Wrapper = styled.div`
  @media screen and (max-width: 480px) {
    .page {
      min-height: cals(100vh - var(--nav-height));
      display: block;
      grid-template-columns: 1fr;
      align-items: center;
    }
      
    .main-img {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .page {
      min-height: cals(100vh - var(--nav-height));
      display: grid;
      align-items: center;
    }
  
    .main-img {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }

  @media screen and (max-width: 1280px) {
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
  }
`
export default Wrapper
