import { useCallback, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Title } from '../common/style';
import { leaves } from '../../constants';

const MainTitle = styled(Title)`
  margin-top: 15px;
`;

const LeafListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
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
  width: 90%;
  background-color: ${(props) => (props.isSelect ? '#FFC7C7' : '#FFE5E2')};
  border-radius: 30px;
  cursor: pointer;
`;

const LeafBtn = styled.img`
  width: 100%;
  height: 100%;
`;

interface Props {
  iconId: number;
  setIconId: Dispatch<SetStateAction<number>>;
}

export default function LeafSelect({ iconId, setIconId }: Props) {
  const { postId } = useParams();

  const selectImg = useCallback(
    (id: number) => () => {
      setIconId(id);
    },
    []
  );

  return (
    <>
      <MainTitle>꽃을 선택해주세요.</MainTitle>
      <LeafListWrapper>
        {leaves[Number(postId)] &&
          leaves[Number(postId)].map((e, i) => {
            return (
              <BtnWrapper
                key={e.id}
                onClick={selectImg(i)}
                isSelect={iconId === i}
              >
                <LeafBtn src={e.url} />
              </BtnWrapper>
            );
          })}
      </LeafListWrapper>
    </>
  );
}
