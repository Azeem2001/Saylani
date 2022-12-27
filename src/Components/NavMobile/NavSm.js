import React, { useState } from "react";
import styles from "./nav-sm.module.scss";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import ClearIcon from "@mui/icons-material/Clear";
import ThemeSwitch from "Components/ThemeSwitch/ThemeSwitch";
const NavSm = () => {
  let [isOpen, setOpen] = useState(false);
  let navLinksRef = React.useRef(null);
  let navLogoRef = React.useRef(null);
  const navigate = useNavigate();
  function hamburgerClick() {
    let drawer = navLinksRef.current.classList.toggle(styles.open);
    if (drawer) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    Array.from(navLinksRef.current.children).forEach((link) => {
      link.classList.toggle(styles.fade);
    });
    navLogoRef.current.children[0].className = styles.click_logo_animate;
    setTimeout(() => {
      navLogoRef.current.children[0].className = "";
    }, 500);
  }

  return (
    <>
      <nav className={styles.nav_sm_container}>
        <div className={styles.mobile_navbar}>
          <div className={styles.special_logo}>
            <Link href="/">
              <div>
                <Image
                  src="/Assets/saylani_logo.png"
                  width={200}
                  height={57}
                  layout="intrinsic"
                  priority={true}
                  alt="logo"
                />
              </div>
            </Link>
          </div>
          <div className={styles.widgets_container}>
            <div
              className={styles.icons}
              onClick={hamburgerClick}
              ref={navLogoRef}
            >
              {isOpen ? (
                <ClearIcon className={styled.click_logo_animate} />
              ) : (
                <FormatAlignRightIcon className={styled.click_logo_animate} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.nav_links} ref={navLinksRef}>
          <UL>
            <Li onClick={() => navigate("/")}>★ Home</Li>
            <Li onClick={() => navigate("/about")}>★ About</Li>
            <Li onClick={() => navigate("/service")}>★ Services</Li>
            <Li onClick={() => navigate("/media")}>★ Media</Li>
            <Li onClick={() => navigate("/courses")}>★ Courses</Li>
          </UL>
          <SwitchWrapper>
            <ThemeSwitch />
          </SwitchWrapper>
        </div>
      </nav>
    </>
  );
};

export default NavSm;
const UL = styled.ul`
  list-style-type: none;
  height: 100%;
  width: 100%;
  padding-left: 0;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;
const Li = styled.button`
  font-family: "Inter-Medium";
  color: ${({ theme }) => theme.black};
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.border};
  padding-left: 1rem;

  :focus {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary};
  }
`;
const Link = styled.div``;

const Image = styled.img``;

const SwitchWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: -46%;
  right: 0;
`;
