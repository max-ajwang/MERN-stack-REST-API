import styled from 'styled-components'

const Wrapper = styled.div`
{*/ New Breakpoints ===> (480px, 768px, 1024px, and 1280px)*/}


  .blog {
    display: flex;
    flex-direction: column;
  }

  .blog-container {
    display: flex;
    flex-direction: row;
  }

  .blog-heading {
    width: 100%;
    text-align: left;
    margin-bottom: 5rem;
  }

  .blog-heading h1 {
    font-size: 62px;
    line-height: 75px;
    font-family: var(--font-family);
    font-weight: 800;
  }

  .blog-container-articles {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }

  @media screen and (max-width: 990px) {
    .blog-container {
      flex-direction: column-reverse;
    }

    .blog-container-articles {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 700px) {
    .blog-container-articles {
      grid-template-columns: repeat(1, 1fr);
    }

    .blog-heading h1 {
      font-size: 46px;
      line-height: 52px;
    }
  }

  @media screen and (max-width: 550px) {
    .blog-heading h1 {
      font-size: 34px;
      line-height: 42px;
    }
  }
`

export default Wrapper
