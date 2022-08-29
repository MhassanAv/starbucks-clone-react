import styled from "styled-components";

export const Container = styled.nav`
padding:1.7rem;
padding-left: max(calc(15vw - 10rem),2rem);
padding-right:max(calc(15vw - 10rem),2rem);
font-size: 17px;
height: auto;
line-height: 1.4;
max-width: auto;
font-weight: 700;
letter-spacing:0.0.5rem;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${({theme})=>theme.nav};
font-feature-settings: "calt";
box-shadow: 1px 7px 0px -5px rgba(0,0,0,0.06);
-webkit-box-shadow: 1px 7px 0px -5px rgba(0,0,0,0.06);
-moz-box-shadow: 1px 7px 0px -5px rgba(0,0,0,0.06);
`


export const NavStyledLeft = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
flex: 1;
color:${({theme})=>theme.fontColor};

svg{
    width:55px;
    cursor: pointer;
}
div ul{
    margin:0;
    display: flex; 
    align-items: center;
}
div ul li svg{
    width: 50px;
}


div ul li{
    list-style: none;
    margin: 0 0.7rem;

}
div ul :last-child{
    margin: 0;
}

div ul li:hover{
    color:${({theme})=>theme.main};
    cursor: pointer;
}
`

export const NavStyledRight = styled.div`

display: flex;
flex:1;
justify-content: flex-end;
align-items: center;

svg{
    width: 25px;
    margin-right: 0.6rem;
    
}
div{
    fill: ${({theme})=>theme.fontColor};
    color:${({theme})=>theme.fontColor};
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-right: 1.4rem;
    cursor: pointer;

    &:hover,:focus{
        fill:${({theme})=>theme.main};
        color: ${({theme})=>theme.main};
    }

}

`
