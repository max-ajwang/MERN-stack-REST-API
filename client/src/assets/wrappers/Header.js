import styled from 'styled-components'

const Wrapper = styled.div`
  h1, h3 {
    font-weight: 700;
    font-family: var(--bodyFont);
    span {
      color: var(--primary-500);
    }
  }

  .page {
    min-height: cals(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    margin-top: -30px;
  }

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    .page {
      min-height: cals(100vh - var(--nav-height));
      display: block;
      align-items: center;
    }

    .main-img {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .page {
      min-height: cals(100vh - var(--nav-height));
      display: block;
      align-items: center;
    }
      
    .main-img {
      display: none;
    }

    p {
      font-size: 20px;
    }
  }
`
export default Wrapper
