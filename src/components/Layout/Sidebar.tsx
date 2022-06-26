import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarWrap = styled.div`
  z-index: 10;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100%;
  width: 55%;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Menu = styled.li`
  padding: 16px 8px;
`;

const ExitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 0.8rem;
`;

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <SideBarWrap id="sidebar" ref={outside} className={isOpen ? 'open' : ''}>
      <img
        src="/img/close.png"
        alt="close"
        onClick={toggleSide}
        onKeyDown={toggleSide}
      />
      <nav>
        <ul>
          <Menu onClick={toggleSide}>
            <Link to="/login">로그인</Link>
          </Menu>
          <Menu onClick={toggleSide}>
            <Link to="/">로그아웃</Link>
          </Menu>
          <Menu onClick={toggleSide}>
            <Link to="/">꽃다발 만들기</Link>
          </Menu>
          <Menu>mmm@gmail.com로 문의 부탁</Menu>
        </ul>
        <ExitMenu>회원 탈퇴</ExitMenu>
      </nav>
    </SideBarWrap>
  );
}

export default Sidebar;
