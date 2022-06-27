import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import BackgroundImg from '../assets/imgs/temp.png';
import theme from '../common/style/theme';

const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
`;

const TextWrapper = styled.div`
  font-size: ${theme.calcRem(25)};
  b {
    font-size: ${theme.calcRem(28)};
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const BtnArea = styled.div`
  position: absolute;
  bottom: 45px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartBtn = styled.button`
  font-size: ${theme.calcRem(30)};
  height: 2.5rem;
  width: 80%;
  border-radius: 12px;
  background-color: #d9d9d9;
  border: none;
`;

function GuestHome() {
  const navigate = useNavigate();

  const onStartClick = useCallback(() => {
    navigate('/guest/select');
  }, []);

  return (
    <MainWrapper>
      <TextWrapper>
        <b>닉네임</b>&nbsp;님에게
        <br />
        <b>10</b> 송이의 꽃이 도착했어요.
        <br />
        2022.06.26
      </TextWrapper>
      <BackgroundImage src={BackgroundImg} />
      <BtnArea>
        <StartBtn onClick={onStartClick}>꽃 보내기</StartBtn>
      </BtnArea>
    </MainWrapper>
  );
}

export default GuestHome;
