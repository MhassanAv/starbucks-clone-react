import styled, { css } from 'styled-components';



export const StyledList = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
max-height: max-content;
max-width: auto;
background-color: transparent;
color:${({ theme }) => theme.fontColor};
transition: all 0.5 ease-in-out;
z-index:1;

h3 {
    position: relative;
    background-color:${({ theme }) => theme.body}; ;
    text-align: left;
    font-size: 1.4rem;
    font-weight: 500;
    z-index:1;
}
ul {
    position: relative;
    display: block;
    text-align: left;
    list-style: none;
    margin:0;
    padding: 0;
    z-index:5;
}
ul li {
    font-size:1.1rem;
    text-align: left;
    padding:1rem 0rem;
    opacity: 0.8;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
}

svg{
    transition: all 300ms ease-in-out;
    position: relative;
    z-index: 20;
    display: none;
    cursor: pointer;
}

@media all and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    max-height: fit-content;
    svg{
        display: block;
        margin-right:1rem;
    }
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        transition: all 300ms ease-in-out;
        top:-15rem;
        max-height:0;
        opacity:0;
        visibility: hidden;
    }
    h3 {
    text-align: left;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0rem;
    width: 90%;
    background-color: ${({ theme }) => theme.body};
}
ul li {
    font-size: 1rem;
}

${({state})=>state && css`

ul {
    opacity: 1;
    transform-origin: top;
    top:0rem;
    max-height: 50rem;
    visibility: visible;

}


`}
    
}


`