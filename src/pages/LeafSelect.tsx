import { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import BackgroundImg from '../assets/imgs/temp.png';
import { Button, Title } from '../components/common/style';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 45px 15px calc(50vw / 2) 15px;
  padding-bottom: ;
`;

const LeafListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
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
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LeafSelect() {
  const navigate = useNavigate();
  const leafs = [
    { img: BackgroundImg, id: 1 },
    { img: BackgroundImg, id: 2 },
    { img: BackgroundImg, id: 3 },
    { img: BackgroundImg, id: 4 },
    { img: BackgroundImg, id: 5 },
    { img: BackgroundImg, id: 6 },
    { img: BackgroundImg, id: 7 }
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
        <Button onClick={onNextClick}>다음</Button>
      </BtnArea>
    </MainWrapper>
  );
}

export default LeafSelect;
