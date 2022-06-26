import React from 'react';
import styled from 'styled-components';

import BackgroundImg from '../assets/imgs/temp.png';

const GuestHomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Neurit';
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const startBtn = styled.button``;

function GuestHome() {
  return (
    <GuestHomeWrapper>
      안녕
      <BackgroundImage src={BackgroundImg} />
    </GuestHomeWrapper>
  );
}

export default GuestHome;
