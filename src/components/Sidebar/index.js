import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>HOME</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>ABOUT US</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>SERVICES</SidebarLink>
          <SidebarLink to='roadmap' onClick={toggle}>ROADMAP</SidebarLink>
          <SidebarLink to='career' onClick={toggle}>CAREER</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>English</SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

