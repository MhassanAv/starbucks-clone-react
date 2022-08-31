import styled from "styled-components";
import {motion} from 'framer-motion'
import { MdMenu, MdClose } from 'react-icons/md'

export const MenuBtn = styled(MdMenu)`

display: none;

@media all and (max-width: 768px){

    display: block;
}



`

export const CloseBtn = styled(MdClose)`

display: none;

@media all and (max-width: 768px){

    display: block;
 
}

`

export const SideBarStyled = styled(motion.div)`
  display: none;
  position: absolute;
  right: 0;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  font-size: 1.2rem;
  z-index: 1;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.body};
  font-weight: 600;


  @media all and (max-width: 768px) {
    display: block;
    width: 70vw;


    svg {
      height: 1.3rem;
      fill: ${({ theme }) => theme.fontColor};
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 2.5rem;
      margin-bottom: 0rem;
      margin-top: 1rem;
      cursor: pointer;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    ul li {
      margin-top: 2rem;
      margin-bottom: 2rem;
      cursor: pointer;
    }

  }
`;
