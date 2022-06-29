import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button, Title } from '../components/common/style';
import F1 from '../assets/imgs/Group14.png';
import F2 from '../assets/imgs/Group15.png';

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 15px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface LeafBtnProps {
  isSelect?: boolean;
  img?: string;
}

const BtnWrapper = styled.div<LeafBtnProps>`
  position: relative;
  width: calc(100% - 10px);
  margin: 5px;
  background-color: #ffdc25;
  border-radius: 30px;
  margin-bottom: 50%;
  opacity: ${(props) => (props.isSelect ? 1 : 0.5)};
  cursor: pointer;
`;

const LeafBtn = styled.img`
  width: 100%;
  height: 100%;
`;

const NextBtn = styled(Button)`
  flex-shrink: 0;
`;

function LeafSelect() {
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const leafs = [
    { img: F1, id: 0 },
    { img: F2, id: 1 },
    { img: F2, id: 2 },
    { img: F2, id: 3 }
  ];

  const onNextClick = useCallback(() => {
    navigate('/guest/write');
  }, []);

  const selectImg = useCallback(
    (id: number) => () => {
      setSelect(id);
    },
    []
  );

  return (
    <MainWrapper>
      <Title>꽃 송이를 선택해주세요.</Title>
      <LeafListWrapper>
        {leafs.map((e) => {
          return (
            <BtnWrapper
              key={e.id}
              onClick={selectImg(e.id)}
              isSelect={select === e.id}
            >
              <LeafBtn src={e.img} />
            </BtnWrapper>
          );
        })}
      </LeafListWrapper>
      <NextBtn onClick={onNextClick}>다음</NextBtn>
    </MainWrapper>
  );
}

export default LeafSelect;
