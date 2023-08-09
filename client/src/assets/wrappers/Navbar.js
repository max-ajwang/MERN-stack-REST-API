import styled from 'styled-components'

const Wrapper = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: left;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 1.15em 3.5rem;
    background-color: var(--navy-blue);
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
  .navbar-menu-container p {
    text-transform: capitalize;
    margin-left: 0rem;
    margin-right: 1rem;
    cursor: pointer;
    color: var(--navy-blue);
    font-weight: 600;
  }

  .navbar-sign button,
  .navbar-menu-container button {
    font-size: 15px;
    border-radius: var(--borderRadius);
  }

  .navbar-menu {
    margin-left: 1rem;
    margin-top: .5em;
    display: flex;
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
    background: var(--white);
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
    color: var(--primary-700);
    :hover{
      color: var(--dark-yellow);
      box-shadow: var(--shadow-1);
    }
  }

  .navbar-menu-container-links-sign {
    display: none;
  }

  .navbar-menu-container-links-sign {
      display: flex;
      flex-direction: column;
    }

    .navbar-menu-container-links-sign h4 {
      color: var(--navy-blue);
    }

    .navbar-menu-container-links-sign h6 {
      color: var(--navy-blue);
      font-weight: 600;
      font-size: smaller;
      margin-top: 0.1rem;
      margin-bottom: 0.8rem;
    }

    .navbar-menu-container-links-sign button {
      margin-top: -2rem;
    }

  @media screen and (max-width: 1280px) {

  }

  @media screen and (max-width: 1024px) {
    .navbar {
      padding: 1.15em 3.5rem;
    }

    .navbar-links-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: -1rem;
    }

    .navbar-menu {
      display: flex;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar {
      padding: 1.15em 3.5rem;
    }
  }

  @media screen and (max-width: 480px) {
    .navbar {
      padding: 1.15em 1.2rem;
    }

    .navbar-links-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: -0.25rem;
    }

    .navbar-menu-container {
      top: 20px;
    }

    .navbar-menu-container-links-sign {
      display: flex;
      flex-direction: column;
    }

    .navbar-menu-container-links-sign button {
      margin-top: 0rem;
    }
  }
`

export default Wrapper
