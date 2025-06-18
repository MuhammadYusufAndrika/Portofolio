// App.tsx
import React from "react";
import { createGlobalStyle } from "styled-components";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light {
      body {
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }
      .logo {
        color: var(--black);
      }
      header.header-fixed {
        transition: 0.5s;
        background-color: #f5f5f550;
        a {
          transition: 0.5s;
          color: black;
        }
        .menu,
        .menu:before,
        .menu:after {
          background-color: var(--black);
        }
        .menu.active {
          background-color: rgba(555, 555, 555, 0);
        }
      }
      footer.footer {
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.1);
        color: var(--black);
      }
      form {
        input,
        textarea {
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder {
            transition: 0.5s;
            color: var(--black);
          }
        }
      }
    }
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--black);
    color: #fff;
    font-family: 'Red Hat Display', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #fff;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover {
      filter: brightness(0.8);
    }
    &:disabled {
      filter: brightness(0.8);
      cursor: not-allowed;
    }
  }

  .logo {
    font-size: 3rem;
    color: #fff;
  }

  ul, li {
    list-style: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
