import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import theme from '../common/style/theme';
import BackBtn from '../components/common/BackBtn';
import { Button } from '../components/common/style';
import Back from '../assets/imgs/letter.png';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const NicknameInput = styled.input`
  width: 100%;
  border-radius: 12px;
  height: 40px;
  flex-shrink: 0;
  font-size: ${theme.calcRem(24)};
  padding-left: 6px;
  &:focus {
    outline: none;
  }
`;

const LetterWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin-top: 15px;
`;

const Letter = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: ${theme.calcRem(24)};
  padding: 30px;
  border: none;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  &:focus {
    border: none;
    outline: none;
  }
`;

const LetterImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
`;

const NextBtn = styled(Button)`
  flex-shrink: 0;
  margin-top: 15px;
`;

function GuestWrite() {
  const navigate = useNavigate();

  const onNextClick = useCallback(() => {
    navigate('/guest/layout');
  }, []);

  return (
    <MainWrapper>
      <BackBtn />
      <ContentWrapper>
        <NicknameInput placeholder="닉네임 (최대 8자)" required maxLength={8} />
        <LetterWrapper>
          <Letter />
          <LetterImg src={Back} />
        </LetterWrapper>
      </ContentWrapper>
      <NextBtn onClick={onNextClick}>다음</NextBtn>
    </MainWrapper>
  );
}

export default GuestWrite;
