import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import theme from '../common/style/theme';

const MainWrapper = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
`;

const Title = styled.label`
  font-size: ${theme.calcRem(30)};
`;

const LeafListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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

function LeafSelect() {
  const navigate = useNavigate();

  const onNextClick = useCallback(() => {
    navigate('/guest/write');
  }, []);

  return (
    <MainWrapper>
      <Title>꽃 송이를 선택해주세요.</Title>
      <LeafListWrapper>d</LeafListWrapper>
      <BtnArea>
        <NextBtn onClick={onNextClick}>다음</NextBtn>
      </BtnArea>
    </MainWrapper>
  );
}

export default LeafSelect;
