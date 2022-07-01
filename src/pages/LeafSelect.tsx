import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Title } from '../components/common/style';
import { leaves } from '../constants';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 45px 15px 0 15px;
`;

const MainTitle = styled(Title)`
  margin-top: 15px;
`;

const LeafListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  place-items: center;
  width: 100%;
  // height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface LeafBtnProps {
  isSelect?: boolean;
}

const BtnWrapper = styled.div<LeafBtnProps>`
  width: 100%;
  background-color: ${(props) => (props.isSelect ? '#FFC7C7' : '#FFE5E2')};
  border-radius: 30px;
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
  const { postId } = useParams();

  const onNextClick = useCallback(() => {
    navigate(`/guest/write/${postId}/${select}`);
  }, [select]);

  const selectImg = useCallback(
    (id: number) => () => {
      setSelect(id);
    },
    []
  );

  return (
    <MainWrapper>
      <MainTitle>꽃을 선택해주세요.</MainTitle>
      <LeafListWrapper>
        {leaves[Number(postId)] &&
          leaves[Number(postId)].map((e, i) => {
            return (
              <BtnWrapper
                key={e.id}
                onClick={selectImg(i)}
                isSelect={select === i}
              >
                <LeafBtn src={e.url} />
              </BtnWrapper>
            );
          })}
      </LeafListWrapper>
      <NextBtn onClick={onNextClick}>다음</NextBtn>
    </MainWrapper>
  );
}

export default LeafSelect;
