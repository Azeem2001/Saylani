import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { SetThemeColor } from "Redux/Theme/action";
import { setCookie } from "Utils/StorageVariables";
import SwitchButton from "Components/SwitchButton/SwitchButton";

const ThemeSwitch = () => {
  const dispatch = useDispatch();

  const { isThemeLight } = useSelector((state) => state.themeColorReducer);
  const handleThemeChange = () => {
    setCookie("isThemeLight", !isThemeLight);
    dispatch(SetThemeColor(!isThemeLight));
  };
  return (
    <Wrapper>
      <Text isLight={isThemeLight}>
        {isThemeLight ? (
          <>
            <Icon src="/Assets/sun.svg" /> &nbsp;Light &nbsp;
          </>
        ) : (
          <>
            <Icon isMoon src="/Assets/moon.svg" /> &nbsp;Dark &nbsp;
          </>
        )}
      </Text>
      <SwitchButton
        isThin
        uncheckedIcon={false}
        onChange={handleThemeChange}
        checked={!isThemeLight}
        checkedIcon={false}
        onColor="#3C4043"
        offColor="#ffffff"
        handleDiameter={16}
        onHandleColor="#ffffff"
        offHandleColor="#f5c84c"
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgroundLight};
  margin-top: 0.7rem;
  width: 9rem;
  transform: translateX(-40px);
`;
const Icon = styled(ReactSVG)`
  width: ${({ isMoon }) => (isMoon ? "1rem" : "1.4rem")};
  path {
    fill: ${({ isMoon, theme }) =>
      isMoon ? theme.white : theme.warning} !important;
      
  }
`;
const Text = styled.h6`
  font-size: 16px;
  font-family: "Inter-Medium";
  color: ${({ theme, isLight }) => (isLight ? theme.warning : theme.white)};
  /* margin-bottom: 0.1rem; */
  display: flex;
  align-items: flex-start;
  margin: auto;
`;
export default ThemeSwitch;
