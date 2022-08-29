import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`


  *,::before,::after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    height: 100vh;
    background-color:${({theme})=>theme.body};
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

@media all and (max-width: 500px) {

  font-size: 14rem;

  h1{
    font-size: 14rem;
  }
  
}

`
export default GlobalStyle;