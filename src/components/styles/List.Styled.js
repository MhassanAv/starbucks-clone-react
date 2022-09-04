import styled from 'styled-components';



export const StyledList = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
max-height: auto;
max-width: auto;
background-color: transparent;
color:${({ theme }) => theme.fontColor};
transition: all 0.5 ease-in-out;

h3 {
    position: relative;
    background-color:${({ theme }) => theme.body}; ;
    text-align: left;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 1rem 0rem;
    z-index:50;
}
ul {
    display: block;
    text-align: left;
    list-style: none;
    margin:0;
    padding: 0;
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
    svg{
        display: block;
        margin-right:1rem;
    }
    ul{
        position: relative;
        width: 100%;
        display: none;
        z-index: 10;
        transition: height 1s ease-in-out;
        background-color: ${({ theme }) => theme.backgroundColor};
    }
    h3 {
    position: relative;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0rem;
    z-index:10;
    background-color: ${({ theme }) => theme.backgroundColor};
}
ul li {
    font-size: 1rem;
}
    
}


`