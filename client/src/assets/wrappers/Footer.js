import styled from 'styled-components'

const Wrapper = styled.footer`
  .gpt3__footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-footer);
  }

  .gpt3__footer-heading {
    width: 100%;
    text-align: center;

    margin-bottom: 3rem;
  }

  .gpt3__footer-heading h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 64px;
    line-height: 75px;
  }

  .gpt3__footer-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    border: 1px solid #fff;
    text-align: center;

    margin-bottom: 10rem;
    cursor: pointer;
  }

  .gpt3__footer-btn p {
    font-size: 18px;
    font-family: var(--font-family);
    line-height: 21px;
    color: #fff;
    word-spacing: 2px;
  }

  .gpt3__footer-links {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;
    text-align: left;
  }

  .gpt3__footer-links div {
    width: 250px;
    margin: 1rem;
  }

  .gpt3__footer-links_logo {
    display: flex;
    flex-direction: column;
    color: #fff;
  }

  .gpt3__footer-links_logo img {
    width: 118px;
    height: 30px;

    margin-bottom: 1rem;
  }

  .gpt3__footer-links_logo p {
    font-family: var(--font-family);
    font-size: 12px;
    line-height: 15px;
    color: #fff;
  }

  .gpt3__footer-links_div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .gpt3__footer-links_div h4 {
    font-size: 14px;
    line-height: 17px;
    font-family: var(--font-family);
    color: #fff;

    margin-bottom: 0.9rem;
  }

  .gpt3__footer-links_div p {
    font-size: 12px;
    line-height: 15px;
    font-family: var(--font-family);
    color: #fff;

    margin: 0.5rem 0;
    cursor: pointer;
  }

  .gpt3__footer-copyright {
    margin-top: 2rem;
    text-align: center;
    width: 100%;
  }

  .gpt3__footer-copyright p {
    font-size: 12px;
    font-family: var(--font-family);
    line-height: 15px;
    color: #fff;
  }

  @media screen and (max-width: 850px) {
    .gpt3__footer-heading h1 {
      font-size: 44px;
      line-height: 50px;
    }
  }

  @media screen and (max-width: 550px) {
    .gpt3__footer-heading h1 {
      font-size: 34px;
      line-height: 42px;
    }

    .gpt3__footer-links div {
      margin: 1rem 0;
    }

    .gpt3__footer-btn p {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 400px) {
    .gpt3__footer-heading h1 {
      font-size: 27px;
      line-height: 38px;
    }
  }
`

export default Wrapper
