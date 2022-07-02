import { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';

import { Title, Button } from '../common/style';
import { leaves, flowerwraps } from '../../constants';
import { IPost } from '../../types';
import { createMessageApi } from '../../api/Apis';

const MainTitle = styled(Title)`
  flex-shrink: 0;
  margin-top: 15px;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  aspect-ratio: 343/398;
`;

const FlowerWrap = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface IAnyLeaf {
  top: number;
  left: number;
  width: number;
  height: number;
}

const AnyLeaf = styled.img<IAnyLeaf>`
  position: absolute;
  top: ${(props) => `calc(50% + ${props.top * props.height}px)`};
  left: ${(props) => `calc(50% + ${props.left * props.width}px)`};
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

interface ISelectedLeaf {
  isDragging: boolean;
}

interface IPos {
  x: number;
  y: number;
}

interface IBox {
  height: number;
  width: number;
}

const SelectedLeaf = styled.img<ISelectedLeaf>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  width: 100px;
  height: 100px;
  cursor: move;
  -webkit-user-drag: none;
  border-radius: 30px;
  border: ${(props) => (props.isDragging ? 'none' : '2px solid #fff')};
`;

const NextBtn = styled(Button)`
  margin-top: 15px;
  flex-shrink: 0;
`;

interface Props {
  post: IPost;
  iconId: number;
  nickname: string;
  text: string;
}

export default function GuestLayout({ post, iconId, nickname, text }: Props) {
  const [pos, setPos] = useState<IPos>({ x: 0, y: 0 });
  const [originPos, setOriginPos] = useState<IPos>({ x: 0, y: 0 });
  const [box, setBox] = useState<IBox>({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const imgWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;
  const nodeRef = useRef(null);
  const imgSize = 100;
  const navigate = useNavigate();

  useEffect(() => {
    const wrapperBox = imgWrapper.current.getBoundingClientRect();
    setBox({ ...box, width: wrapperBox.width, height: wrapperBox.height });
    console.log(wrapperBox);
  }, []);

  const startPos = useCallback(
    (data: any) => {
      setIsDragging(false);
      if (
        data.x - imgSize * 0.33 >= (box.width / 2) * -1 &&
        data.x + imgSize * 0.33 < box.width / 2 &&
        data.y - imgSize * 0.33 >= (box.height / 2) * -1 &&
        data.y + imgSize * 0.33 < box.height / 2
      ) {
        setOriginPos({ ...originPos, x: data.x, y: data.y });
      } else {
        setPos({ ...pos, x: originPos.x, y: originPos.y });
      }
    },
    [pos, originPos, box]
  );

  const trackPos = useCallback(
    (data: any) => {
      setIsDragging(true);
      setPos({ ...pos, x: data.x, y: data.y });
    },
    [pos]
  );

  const stopPos = useCallback(
    (data: any) => {
      setIsDragging(false);
      if (
        data.x - imgSize * 0.33 >= (box.width / 2) * -1 &&
        data.x + imgSize * 0.33 < box.width / 2 &&
        data.y - imgSize * 0.33 >= (box.height / 2) * -1 &&
        data.y + imgSize * 0.33 < box.height / 2
      ) {
        setPos({ ...pos, x: data.x, y: data.y });
      } else {
        setPos({ ...pos, x: originPos.x, y: originPos.y });
      }
      console.log(pos);
    },
    [pos, originPos, box]
  );

  const onFinishClick = useCallback(async () => {
    const xRatio = pos.x / box.width;
    const yRatio = pos.y / box.height;
    console.log(pos, box, xRatio, yRatio);
    // const resp = await createMessageApi({
    //   postId: post.id,
    //   iconId,
    //   nickname,
    //   content: text,
    //   x: xRatio,
    //   y: yRatio
    // });
    navigate(`/guest/result/${post.id}`);
  }, [pos, box]);

  return (
    <>
      <MainTitle>원하는 위치에 꽃을 배치해주세요.</MainTitle>{' '}
      <ImgWrapper ref={imgWrapper}>
        <FlowerWrap src={flowerwraps[post.categoryId]} />
        {post.count > 0 &&
          post.messages.map((e) => {
            return (
              <AnyLeaf
                top={e.y}
                left={e.x}
                width={box.width}
                height={box.height}
                src={leaves[post.categoryId][e.iconId].url}
                key={e.msgId}
              />
            );
          })}
        <Draggable
          position={pos}
          positionOffset={{ x: '-50%', y: '-50%' }}
          onStart={(e, data) => startPos(data)}
          onDrag={(e, data) => trackPos(data)}
          onStop={(e, data) => stopPos(data)}
          nodeRef={nodeRef}
        >
          <SelectedLeaf
            src={leaves[post.categoryId][Number(iconId)].url}
            ref={nodeRef}
            isDragging={isDragging}
            draggable
          />
        </Draggable>
      </ImgWrapper>
      <NextBtn onClick={onFinishClick}>완료</NextBtn>
    </>
  );
}
