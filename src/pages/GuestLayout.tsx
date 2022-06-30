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
  const [originPos, setOriginPos] = useState<IPos>({ x: 0, y: 0 });
  const [box, setBox] = useState<IBox>({ width: 0, height: 0 });

  const imgWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;
  const nodeRef = useRef(null);
  const categoryId = 1;
  const imgSize = 100;

  useEffect(() => {
    const wrapperBox = imgWrapper.current.getBoundingClientRect();
    setBox({ ...box, width: wrapperBox.width, height: wrapperBox.height });
    console.log(wrapperBox);
    // const fetchData = async () => {
    //   const response = await axios.get(`${process.env.apiUrl}/api/post/${1}`);
    // };
    // fetchData();
  }, []);

  const startPos = (data: any) => {
    if (
      data.x >= 0 &&
      data.x + imgSize < box.width &&
      data.y >= 0 &&
      data.y + imgSize < box.height
    ) {
      setOriginPos({ ...originPos, x: data.x, y: data.y });
    } else {
      setPos({ ...pos, x: originPos.x, y: originPos.y });
    }
  };

  const trackPos = (data: any) => {
    setPos({ ...pos, x: data.x, y: data.y });
  };

  const stopPos = (data: any) => {
    if (
      data.x >= 0 &&
      data.x + imgSize < box.width &&
      data.y >= 0 &&
      data.y + imgSize < box.height
    ) {
      setPos({ ...pos, x: data.x, y: data.y });
    } else {
      setPos({ ...pos, x: originPos.x, y: originPos.y });
    }
  };

  const onFinishClick = useCallback(() => {
    const xRatio = pos.x / box.width;
    const yRatio = pos.y / box.height;
    console.log(pos, box, xRatio, yRatio);
  }, [pos, box]);

  return (
    <MainWrapper>
      <MainTitle>원하는 위치에 꽃을 배치해주세요.</MainTitle>
      <ImgWrapper ref={imgWrapper}>
        <UserImg src={flowerwraps[categoryId]} />
        <Draggable
          position={pos}
          onStart={(e, data) => startPos(data)}
          onDrag={(e, data) => trackPos(data)}
          onStop={(e, data) => stopPos(data)}
          nodeRef={nodeRef}
        >
          <SelectedLeaf src={leaves[categoryId][0].url} ref={nodeRef} />
        </Draggable>
      </ImgWrapper>
      <FinishBtn onClick={onFinishClick}>완료</FinishBtn>
    </MainWrapper>
  );
}
