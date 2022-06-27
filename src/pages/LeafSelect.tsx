import { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import BackgroundImg from '../assets/imgs/temp.png';
import { Button, Title } from '../components/common/style';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;
  padding-bottom: ;
`;

const LeafListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  height: 100%;
  overflow-y: auto;
`;

const LeafBtn = styled.img`
  width: calc(50vw - 25px);
  height: calc(50vw - 25px);
  margin: 5px;
  border-radius: 12px;
`;

const NextBtn = styled(Button)`
  flex-shrink: 0;
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
      <NextBtn onClick={onNextClick}>다음</NextBtn>
    </MainWrapper>
  );
}

export default LeafSelect;
