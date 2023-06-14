import styled from 'styled-components'

const Wrapper = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0rem;
  }

  .navbar-links {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    
  }

  .navbar-links-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar-sign {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .navbar-links-container p,
  .navbar-sign p,
  .navbar-menu-container p {
    color: var(--textColor);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
  }

  .navbar-sign button,
  .navbar-menu-container button {
    padding: 0.5rem 1rem;
    color: #fff;
    background: #2cb1bc;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }

  .navbar-menu {
    margin-left: 1rem;
    display: none;
    position: relative;
  }

  .navbar-menu svg {
    cursor: pointer;
  }

  .navbar-menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    text-align: end;
    background: var(--grey-100);
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 40px;
    margin-top: 1rem;
    min-width: 210px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }

  .navbar-menu-container p {
    margin: 1rem 0;
    :hover{
      background-color: #2cb1bc;
    }
  }

  .navbar-menu-container-links-sign {
    display: none;
  }

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 1024px) {
    .navbar-links-container {
      display: none;
    }

    .navbar-menu {
      display: flex;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar {
      padding: 2rem 0rem;
    }
  }

  @media screen and (max-width: 480px) {
    .navbar {
      padding: 2rem 0rem;
    }

    .navbar-sign {
      display: none;
    }

    .navbar-menu-container {
      top: 20px;
    }

    .navbar-menu-container-links-sign {
      display: block;
    }
  }
`

export default Wrapper
