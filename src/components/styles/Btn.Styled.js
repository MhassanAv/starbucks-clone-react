import styled, { css } from "styled-components";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Btn = styled.button`
  border: 1.5px solid;
  background-color: transparent;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.5rem 1.3rem;
  border-radius: 2rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.fontColor};
      color: ${({ theme }) => theme.nav};
      &:hover {
        opacity: 0.8;
        background-color: rgba(75, 75, 75, 0.7);
      }
    `}

  ${({ white }) =>
    white &&
    css`
      color: ${({ theme }) => theme.fontColor};
      border-color: ${({ theme }) => theme.fontColor};
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    `}
`;

export const DarkModeBtn = styled(MdDarkMode)`
  height: 1.4rem;
  animation-name: btnFade;
  animation-duration: 500ms;
  animation-direction: normal;
  &:hover,
  :focus {
    color: ${({ theme }) => theme.main};
  }
`;
export const LightModeBtn = styled(MdLightMode)`
  height: 1.4rem;
  animation-name: btnFade;
  animation-duration: 500ms;
  animation-direction: normal;
  &:hover,
  :focus {
    color: ${({ theme }) => theme.main};
  }
`;
