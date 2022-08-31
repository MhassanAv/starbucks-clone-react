import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  padding: 1.7rem;
  padding-left: max(calc(15vw - 10rem), 2rem);
  padding-right: max(calc(15vw - 10rem), 2rem);
  font-size: 17px;
  height: auto;
  line-height: 1.4;
  max-width: auto;
  font-weight: 700;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background-color: ${({ theme }) => theme.nav};
  box-shadow: 1px 7px 0px -5px rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: 1px 7px 0px -5px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 1px 7px 0px -5px rgba(0, 0, 0, 0.06);
`;

export const NavStyledLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.fontColor};

  svg {
    width: 55px;
    cursor: pointer;
  }
  div ul {
    margin: 0;
    display: flex;
    align-items: center;
  }
  div ul li svg {
    position: relative;
    top: 0.17rem;
    width: 60px;
    height: 25px;
  }

  div ul li {
    list-style: none;
    margin: 0 0.7rem;
  }
  div ul :last-child {
    margin: 0;
  }

  div ul li:hover {
    color: ${({ theme }) => theme.main};
    cursor: pointer;
  }

  @media all and (max-width: 768px) {
    justify-content: space-between;

    div ul li {
      display: none;
    }
    div ul li:last-child {
      display: block;
    }
  }
`;

export const NavStyledRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 25px;
    margin-right: 0.6rem;
  }
  div {
    fill: ${({ theme }) => theme.fontColor};
    color: ${({ theme }) => theme.fontColor};
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-right: 1.4rem;
    cursor: pointer;

    &:hover,
    :focus {
      fill: ${({ theme }) => theme.main};
      color: ${({ theme }) => theme.main};
    }
  }

  @media all and (max-width: 768px) {
    flex: 0;

    button {
      display: none;
      visibility: hidden;
    }

    div {
      display: none;
      visibility: hidden;
    }
  }
`;
