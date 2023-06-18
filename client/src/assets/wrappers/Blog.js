import styled from 'styled-components'

const Wrapper = styled.div`
  h3 {
    font-weight: 700;
    font-family: var(--bodyFont);
  }

  .blog {
    display: flex;
    flex-direction: column;
    color: black;
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
  
  @media screen and (max-width: 1280px) {
    
  }

  @media screen and (max-width: 1024px) {
    .blog-container {
      flex-direction: column-reverse;
    }

    .blog-container-articles {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .blog-container-articles {
      grid-template-columns: repeat(1, 1fr);
    }

    .blog-heading h1 {
      font-size: 46px;
      line-height: 52px;
    }
  }

  @media screen and (max-width: 480px) {
    .blog-heading h1 {
      font-size: 35px;
      line-height: 42px;
    }
  }
`

export default Wrapper
