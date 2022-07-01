import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import theme from '../common/style/theme';
import { Title, Button } from '../components/common/style';
import BackBtn from '../components/common/BackBtn';
import { flowerwraps, leaves, letters } from '../constants';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;
`;

// !isLayout
const ContentWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const NicknameInput = styled.input`
  width: 100%;
  border-radius: 12px;
  height: 40px;
  flex-shrink: 0;
  font-size: ${theme.calcRem(24)};
  padding-left: 6px;
  &:focus {
    outline: none;
  }
`;

const LetterWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin-top: 15px;
`;

const Letter = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: ${theme.calcRem(24)};
  padding: 30px;
  border: none;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  &:focus {
    border: none;
    outline: none;
  }
`;

const LetterImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
`;

const CountLength = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

// isLayout
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

const PrevBtn = styled.a`
  width: 20px;
  height: 20px;
  border-top: 3.5px solid #000;
  border-left: 3.5px solid #000;
  transform: rotate(-45deg);
  flex-shrink: 0;
`;

const NextBtn = styled(Button)`
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
  const [isLayout, setIsLayout] = useState(false);
  const [post, setPost] = useState({
    id: 1,
    categoryId: 1,
    userId: 1,
    userNickname: '싸피',
    title: 'ssafy3',
    visibility: false,
    date: '2018-12-15',
    createdAt: '2022-06-29T10:14:07.000+00:00',
    count: 2,
    messages: [
      {
        msgId: 1,
        iconId: 1,
        x: 0.04230769230769231,
        y: -0.39609483960948394
      },
      {
        msgId: 2,
        iconId: 2,
        x: -0.19038461538461537,
        y: 0.10739191073919108
      }
    ]
  });
  const [nickname, setNickname] = useState('');
  const [text, setText] = useState('');
  const [pos, setPos] = useState<IPos>({ x: 0, y: 0 });
  const [originPos, setOriginPos] = useState<IPos>({ x: 0, y: 0 });
  const [box, setBox] = useState<IBox>({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const navigate = useNavigate();
  const { postId, iconId } = useParams();
  const imgWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;
  const nodeRef = useRef(null);
  const imgSize = 100;

  useEffect(() => {
    if (isLayout) {
      const wrapperBox = imgWrapper.current.getBoundingClientRect();
      setBox({ ...box, width: wrapperBox.width, height: wrapperBox.height });
      console.log(wrapperBox);
    }

    // const fetchData = async () => {
    //   const response = await axios.get(`${process.env.apiUrl}/api/post/${postId}`);
    // };
    // fetchData();
  }, [isLayout]);

  const startPos = useCallback(
    (data: any) => {
      setIsDragging(false);
      if (
        data.x - imgSize * 0.66 >= (box.width / 2) * -1 &&
        data.x + imgSize * 0.66 < box.width / 2 &&
        data.y - imgSize * 0.66 >= (box.height / 2) * -1 &&
        data.y + imgSize * 0.66 < box.height / 2
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
        data.x - imgSize * 0.66 >= (box.width / 2) * -1 &&
        data.x + imgSize * 0.66 < box.width / 2 &&
        data.y - imgSize * 0.66 >= (box.height / 2) * -1 &&
        data.y + imgSize * 0.66 < box.height / 2
      ) {
        setPos({ ...pos, x: data.x, y: data.y });
      } else {
        setPos({ ...pos, x: originPos.x, y: originPos.y });
      }
      console.log(pos);
    },
    [pos, originPos, box]
  );

  const onNicknameChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setNickname(value);
    },
    [nickname]
  );

  const onTextChange = useCallback(
    (e: React.FormEvent<HTMLTextAreaElement>) => {
      const { value } = e.currentTarget;
      setText(value);
    },
    [text]
  );

  const onPrevClick = useCallback(() => {
    setIsLayout(false);
  }, []);

  const onNextClick = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLayout(true);
  }, []);

  const onFinishClick = useCallback(() => {
    const xRatio = pos.x / box.width;
    const yRatio = pos.y / box.height;
    console.log(pos, box, xRatio, yRatio);
    // navigate('/guest/result');
  }, [pos, box]);

  return (
    <MainWrapper>
      {isLayout ? <PrevBtn onClick={onPrevClick} /> : <BackBtn />}
      {isLayout && <MainTitle>원하는 위치에 꽃을 배치해주세요.</MainTitle>}
      {!isLayout ? (
        <ContentWrapper onSubmit={onNextClick}>
          <NicknameInput
            placeholder="닉네임 (최대 10자)"
            required
            maxLength={10}
            onChange={onNicknameChange}
            value={nickname}
          />
          <LetterWrapper>
            <Letter required onChange={onTextChange} value={text} />
            <LetterImg src={letters[post.categoryId]} />
          </LetterWrapper>
          <NextBtn>다음</NextBtn>
        </ContentWrapper>
      ) : (
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
      )}
      {isLayout && <NextBtn onClick={onFinishClick}>완료</NextBtn>}
    </MainWrapper>
  );
}
