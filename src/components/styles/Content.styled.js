import styled from "styled-components";

export const ContentContainer = styled.div`
height: auto;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
padding:1.7rem;
padding-left: max(calc(15vw - 10rem),0rem);
padding-right:max(calc(15vw - 10rem),0rem);

h1{
  font-size: 1.3vw;
  font-weight: 800;
  text-align: center;

}

h4{
  color:${({theme})=>theme.fontColor}
}

p{
  font-size: 1.5vw;
  font-weight: 500;
  text-align: center;
  padding:max(calc(10vw - 10rem),0rem);
}

`
export const ContentFlex = styled.div`
margin: 1rem 0;
display: flex;
align-items: center;
justify-content: center;

button{
  margin-top: 1rem;
}


img{
  max-width: 50%;
  min-width: 50%;
  object-fit:contain;
}
div {
  max-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.5rem;
  margin-left:auto;
  margin-right: auto;
}

`