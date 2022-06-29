import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarWrap = styled.div`
  z-index: 10;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100vh;
  width: 55%;
  right: -55%;
  top: 0;
  position: absolute;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const CloseBtn = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const MenuLi = styled.li`
  padding: 16px 8px;
  font-size: 1.5rem;
`;

const QuitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 1rem;
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
      <CloseBtn>
        <img
          src="/img/close.png"
          alt="close"
          onClick={toggleSide}
          onKeyDown={toggleSide}
        />
      </CloseBtn>
      <nav>
        <ul>
          <MenuLi>
            <Link to="/login" onClick={toggleSide}>
              로그인
            </Link>
          </MenuLi>
          <MenuLi onClick={toggleSide}>
            <Link to="/">로그아웃</Link>
          </MenuLi>
          <MenuLi onClick={toggleSide}>
            <Link to="/main">꽃다발 만들기</Link>
          </MenuLi>
          <MenuLi onClick={toggleSide}>
            <Link to="/guest">손님으로 들어가기</Link>
          </MenuLi>
          <MenuLi>mmm@gmail.com로 문의 부탁해요~</MenuLi>
        </ul>
        <QuitMenu>회원 탈퇴</QuitMenu>
      </nav>
    </SideBarWrap>
  );
}

export default Sidebar;
