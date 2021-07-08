import React from 'react';
import { FooterContain, FooterWrapper, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, Email } from './FooterElements';
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContain>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Level 4/447 Collins St, Melbourne VIC 3000
            </SocialLogo>
            <SocialIcons>
              <HiOutlineMail style={{ color: "white" }} />
              <Email href="mailto:hello@etm.one">hello@etm.one</Email>
              {/* <SocialIconLink href='#' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink> */}
            </SocialIcons>
            <WebsiteRights>ETM FinTech © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContain>
  )
}

export default Footer;


