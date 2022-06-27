import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const BodyDiv = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 45px 0 0 0; */
`;

function Layout({ children }: { children: any }) {
  return (
    <LayoutDiv>
      <Header />
      <BodyDiv>{children}</BodyDiv>
    </LayoutDiv>
  );
}

export default Layout;
