import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const HeaderPostion = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 45px;
`;

const MenuBtn = styled.div`
  margin-right: 10px;
`;

const MenuImg = styled.img`
  width: 25px;
`;

function Header() {
  const toggleSide = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar?.classList.toggle('open');
  };

  return (
    <HeaderPostion>
      <MenuBtn role="button" onClick={toggleSide}>
        <MenuImg src="/img/menu.png" />
      </MenuBtn>
      <Sidebar />
    </HeaderPostion>
  );
}

export default Header;
