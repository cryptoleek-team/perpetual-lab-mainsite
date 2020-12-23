import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, } from './SidebarElements';
import img1 from '../../images/us-flag.png';
import img2 from '../../images/china-flag.png';

const Sidebar = ({ isOpen, toggle, changeLanguage, t, i18n }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>{t("home")}</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>{t("about")}</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>{t("services")}</SidebarLink>
          <SidebarLink to='roadmap' onClick={toggle}>{t("roadMap")}</SidebarLink>
          <SidebarLink to='career' onClick={toggle}>{t("career")}</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <img src={img1} onClick={changeLanguage('en')} alt='us' />
            <img src={img2} onClick={changeLanguage('pt')} alt='us' />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

