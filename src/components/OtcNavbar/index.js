import React,{useState,useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
//import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from './OtcNavbarElements';

import logo from '../../images/Perpetual Labs-06.png';

const OtcNavbar = ({ toggle, changeLanguage, ln, t }) => {
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

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/'>
              <img src={logo} alt="logo" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='/'
                  exact
                  offset={-80}
                >{t("home")}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/otc"
                  exact
                  offset={-80}
                >{t("otc")}</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/capital"
                  exact
                  offset={-80}
                >{t("capital")}</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn onClick={changeLanguage}>{ln}</NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default OtcNavbar