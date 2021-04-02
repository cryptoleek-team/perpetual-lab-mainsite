import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavOtcLinks
} from './NavbarElements';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import Otc from '../../pages';

import logo from '../../images/Perpetual Labs-06.png';

const Navbar = ({ toggle, changeLanguage, ln, t }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
      return () => {
        window.removeEventListener('scroll', changeNav)
      }
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <img src={logo} alt="logo" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >{t("home")}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >{t("about")}</NavLinks>
              </NavItem>
              <NavItem>
                <NavOtcLinks
                  to="/otc"
                  exact
                  offset={-80}
                >{t("otc")}</NavOtcLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >{t("services")}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='roadmap'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >{t("roadMap")}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='career'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >{t("career")}</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn onClick={changeLanguage}>{ln}</NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
