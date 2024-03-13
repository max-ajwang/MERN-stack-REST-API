import styled from 'styled-components'

const Wrapper = styled.div`
  .page {
    min-height: cals(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    margin-top: 4rem;
    padding-top: 2.5rem;
  }

  h3 {
    span {
      color: var(--dark-yellow);
    }
  }

  a {
    color: var(--dark-yellow);
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
