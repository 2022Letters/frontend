import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import theme from '../common/style/theme';
import BackBtn from '../components/BackBtn';

const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
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
`;

const Letter = styled.textarea`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 15px;
`;

const LetterImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
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

const NextBtn = styled.button`
  font-size: ${theme.calcRem(30)};
  height: 2.5rem;
  width: 80%;
  border-radius: 12px;
  background-color: #d9d9d9;
  border: none;
`;

function GuestWrite() {
  const navigate = useNavigate();

  const onNexttClick = useCallback(() => {
    navigate('/guest/layout');
  }, []);

  return (
    <MainWrapper>
      <BackBtn />
      <ContentWrapper>
        <NicknameInput />
        <Letter />
      </ContentWrapper>
      <BtnArea>
        <NextBtn onClick={onNexttClick}>다음</NextBtn>
      </BtnArea>
    </MainWrapper>
  );
}

export default GuestWrite;
