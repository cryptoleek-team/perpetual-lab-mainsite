import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap
} from './OtcSidebarElements';

const OtcSidebar = ({ isOpen, toggle, changeLanguage, ln, t }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>{t("home")}</SidebarLink>
          <SidebarLink to='/otc' onClick={toggle}>{t("otc")}</SidebarLink>
          <SidebarLink to='/capital' onClick={toggle}>{t("capital")}</SidebarLink>
          <SidebarLink to='/news' onClick={toggle}>{t("news")}</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap onClick={changeLanguage}>
          {ln}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default OtcSidebar;
