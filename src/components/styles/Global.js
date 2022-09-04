import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  *,::before,::after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
  
  body {
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.5;
    height: 100vh;
    background-color:${({ theme }) => theme.body};
    width: 100%;
    overflow-x: hidden;
    max-width: auto;
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
