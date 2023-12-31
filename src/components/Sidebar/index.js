import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarOtcLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, changeLanguage, ln, t }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>{t("home")}</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>{t("about")}</SidebarLink>
          <SidebarOtcLink to='/'>{t("otc")}</SidebarOtcLink>
          <SidebarLink to='services' onClick={toggle}>{t("services")}</SidebarLink>
          <SidebarLink to='roadmap' onClick={toggle}>{t("roadMap")}</SidebarLink>
          <SidebarLink to='career' onClick={toggle}>{t("career")}</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap onClick={changeLanguage}>
          {ln}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

