import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutDiv = styled.div`
  width: 100%;
  height: 100%;
`;

function Layout({ children }: { children: any }) {
  return (
    <LayoutDiv>
      <Header />
      {children}
    </LayoutDiv>
  );
}

export default Layout;
