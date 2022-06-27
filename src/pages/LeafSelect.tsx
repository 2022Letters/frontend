import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import theme from '../common/style/theme';
import BackgroundImg from '../assets/imgs/temp.png';

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
  padding-bottom: calc(50vw - 25px);
`;

const Title = styled.label`
  font-size: ${theme.calcRem(30)};
`;

const LeafListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 15px;
`;

const LeafBtn = styled.img`
  width: calc(50vw - 25px);
  height: calc(50vw - 25px);
  margin: 5px;
  border-radius: 12px;
`;

const BtnArea = styled.div`
  position: absolute;
  bottom: 30px;
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
  const leafs = [
    { img: BackgroundImg, id: 1 },
    { img: BackgroundImg, id: 2 },
    { img: BackgroundImg, id: 3 },
    { img: BackgroundImg, id: 4 },
    { img: BackgroundImg, id: 5 }
    // { img: BackgroundImg, id: 6 },
    // { img: BackgroundImg, id: 7 }
  ];

  const onNextClick = useCallback(() => {
    navigate('/guest/write');
  }, []);

  return (
    <MainWrapper>
      <Title>꽃 송이를 선택해주세요.</Title>
      <LeafListWrapper>
        {leafs.map((e, i) => {
          return <LeafBtn src={e.img} key={e.id} />;
        })}
      </LeafListWrapper>
      <BtnArea>
        <NextBtn onClick={onNextClick}>다음</NextBtn>
      </BtnArea>
    </MainWrapper>
  );
}

export default LeafSelect;
