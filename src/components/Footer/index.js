import React from 'react';
import { FooterContain, FooterWrapper, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContain>
      <FooterWrapper>
        <SocialIcons>
          <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href='//www.instagram.com' target='_blank' aria-label='Instagram'>
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube'>
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'>
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='Linkedin'>
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Address: Unit 1220, 5255 Yonge Street, Toronto, ON, Canada
            </SocialLogo>
            <WebsiteRights>UTU Technology @ {new Date().getFullYear()}All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContain>
  )
}

export default Footer;


