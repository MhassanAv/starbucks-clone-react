import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  *,::before,::after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
    font-size: 14px;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.5;
    height: 100vh;
    background-color:${({ theme }) => theme.body};
    overflow-x: hidden;
    width: 100%;
    max-width: fit-content;
  }

  h4{
  color:${({ theme }) => theme.fontColor};
  font-size: 1.2rem;
  font-weight: 300;
  
  &:hover{
    color: ${({ theme }) => theme.main};
    cursor: pointer;
  }
}

  a{
    text-decoration: none;
  }

  @keyframes btnFade {
  0%{
    opacity: 0;

  }
  100%{
    opacity: 1;
  } 
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;
export default GlobalStyle;
