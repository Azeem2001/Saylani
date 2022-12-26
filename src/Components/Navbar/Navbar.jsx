import ThemeSwitch from "Components/ThemeSwitch/ThemeSwitch";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <ThemeSwitch />
      <ItemContainer>
        <Logo>
          <LogoImage src="./Assets/saylani_logo.png" alt="logo" />
        </Logo>
        <List>
          <UL>
            <Li onClick={() => navigate("/")}>Home</Li>
            <Li onClick={() => navigate("/about")}>About</Li>
            <Li onClick={() => navigate("/service")}>Services</Li>
            <Li onClick={() => navigate("/media")}>Media</Li>
            <Li onClick={() => navigate("/courses")}>Courses</Li>
          </UL>
        </List>
      </ItemContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.backgroundLight};
  box-shadow: -2px 20px 21px 1px ${({ theme }) => theme.shadowDark};
  -webkit-box-shadow: -2px 20px 21px 1px ${({ theme }) => theme.shadowDark};
  -moz-box-shadow: -2px 20px 21px 1px ${({ theme }) => theme.shadowDark};
  z-index: 1000;
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const Logo = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 60%;
`;
const List = styled.div`
  width: 70%;
`;
const UL = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  width: 70%;
`;
const Li = styled.button`
  font-family: "Inter-Medium";
  color: ${({ theme }) => theme.textLight};
  background-color: transparent;
  border: none;
  font-size: 1.2rem;

  :focus {
    color: ${({ theme }) => theme.primary};
  }
`;
