import { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Title, Button } from '../components/common/style';
import { flowerwraps, leaves } from '../constants';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;
`;

const MainTitle = styled(Title)`
  flex-shrink: 0;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const UserImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SelectedLeaf = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  width: 100px;
  height: 100px;
`;

const NextBtn = styled(Button)`
  margin-top: 15px;
  flex-shrink: 0;
`;

export default function GuestLayout() {
  const categoryId = 1;
  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get(`${process.env.apiUrl}/api/post/${1}`);
    };
    fetchData();
  }, []);

  const dragFunction = (
    event: React.DragEvent<HTMLImageElement>,
    type: string
  ) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(type);
  };

  return (
    <MainWrapper>
      <MainTitle>원하는 위치에 꽃을 배치해주세요.</MainTitle>
      <ImgWrapper className="relative">
        <UserImg src={flowerwraps[categoryId]} />
        <SelectedLeaf
          src={leaves[categoryId][0].url}
          onDragOver={(event) => {
            return dragFunction(event, 'over');
          }}
          onDrop={(event) => dragFunction(event, 'drop')}
          onDragEnter={(event) => dragFunction(event, 'enter')}
          onDragLeave={(event) => dragFunction(event, 'leave')}
        />
      </ImgWrapper>
      <NextBtn>완료</NextBtn>
    </MainWrapper>
  );
}
