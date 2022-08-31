import styled from "styled-components";
import { motion } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

export const MenuBtn = styled(MdMenu)`
  display: none;

  @media all and (max-width: 768px) {
    display: block;
  }
`;

export const CloseBtn = styled(MdClose)`
  display: none;

  @media all and (max-width: 768px) {
    display: block;
  }
`;

export const SideBarStyled = styled(motion.div)`
  position: fixed;
  right: 0;
  display: none;
  height: 100vh;
  width: 80vw;
  max-width: 80vw;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  z-index: 1;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.sideBar};
  font-weight: 600;

  @media all and (max-width: 768px) {
    display: block;
    svg {
      height: 1.4rem;
      fill: ${({ theme }) => theme.fontColor};
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 1.5rem;
      margin-bottom: 0rem;
      margin-top: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
    }
    ul li {
      font-size: 1.2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    ul li svg  {
      transform: scale(1.5);
    }
    div button {
      font-size: 0.7rem;
    }
  }
`;
