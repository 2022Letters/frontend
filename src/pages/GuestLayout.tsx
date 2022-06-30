import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Draggable, { DraggableEvent } from 'react-draggable';
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
  top: 0;
  left: 0;
  z-index: 999;
  width: 100px;
  height: 100px;
  cursor: move;
`;

const FinishBtn = styled(Button)`
  margin-top: 15px;
  flex-shrink: 0;
`;

interface IPos {
  x: number;
  y: number;
}

interface IBox {
  height: number;
  width: number;
}

export default function GuestLayout() {
  const [pos, setPos] = useState<IPos>({ x: 0, y: 0 });
  const [box, setBox] = useState<IBox>({ width: 0, height: 0 });

  const imgWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;
  const categoryId = 1;

  useEffect(() => {
    const wrapperBox = imgWrapper.current.getBoundingClientRect();
    console.log(wrapperBox);
    setBox({ width: wrapperBox.width, height: wrapperBox.height } as IBox);

    const fetchData = async () => {
      // const response = await axios.get(`${process.env.apiUrl}/api/post/${1}`);
    };
    fetchData();
  }, []);

  const trackPos = (data: any) => {
    setPos((prev) => ({ ...prev, x: data.x, y: data.y } as IPos));
  };

  const stopPos = (data: any) => {
    // setPos({ x: data.x, y: data.y });
    console.log(pos);
  };

  const onFinishClick = useCallback(() => {
    const xRatio = pos.x / box.width;
    const yRatio = pos.y / box.height;
    console.log(pos, box, xRatio, yRatio);
  }, []);

  return (
    <MainWrapper>
      <MainTitle>
        원하는 위치에 꽃을 배치해주세요.{pos.x} {pos.y}
      </MainTitle>
      <ImgWrapper ref={imgWrapper}>
        <UserImg src={flowerwraps[categoryId]} />
        <Draggable
          onDrag={(e, data) => trackPos(data)}
          onStop={(e, data) => stopPos(data)}
        >
          <SelectedLeaf src={leaves[categoryId][0].url} />
        </Draggable>
      </ImgWrapper>
      <FinishBtn onClick={onFinishClick}>완료</FinishBtn>
    </MainWrapper>
  );
}
