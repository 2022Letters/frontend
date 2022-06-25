import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100%;
  right: -100%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;
const Menu = styled.li`
  margin: 30px 8px;
`;
const ExitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 0.8rem;
`;

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const other = useRef<any>();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousedown', otherClose);
    }
    return () => {
      window.removeEventListener('mousedown', otherClose);
    };
  });

  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    if (isOpen) {
      sidebar?.classList.add('open');
    } else {
      sidebar?.classList.remove('open');
    }
  }, [isOpen]);

  const otherClose = async (e: any) => {
    console.log(isOpen);
    if (isOpen && !other.current.contains(e.target)) {
      setClose();
    }
  };

  const setClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarWrap id="sidebar" ref={other}>
      <img
        src="/img/close.png"
        alt="close"
        onClick={setClose}
        onKeyDown={setClose}
      />
      <ul>
        <Menu>로그인/로그아웃</Menu>
        <Menu>꽃다발 만들기</Menu>
        <Menu>mmm@gmail.com로 문의 부탁</Menu>
      </ul>
      <ExitMenu>회원 탈퇴</ExitMenu>
    </SideBarWrap>
  );
}
export default Sidebar;
