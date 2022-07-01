import { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

import { leaves, flowerwraps } from '../';
import { Button } from '../components/common/style';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const FlowerWrap = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface ILeaf {
  top: number;
  left: number;
  width: number;
  height: number;
}

const Leaf = styled.img<ILeaf>`
  position: absolute;
  top: ${(props) => `${props.top * props.height}px`};
  left: ${(props) => `${props.left * props.width}px`};
  z-index: 8;
  width: 100px;
  height: 100px;
`;

const Label = styled.label`
  width: 100%;
`;

const StartBtn = styled(Button)`
  margin-top: 10px;
  flex-shrink: 0;
`;

export default function GuestResult() {
  const [box, setBox] = useState({ width: 0, height: 0 });
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
        x: 0.3,
        y: 0.4
      },
      {
        msgId: 2,
        iconId: 2,
        x: 0.7,
        y: 0.6
      }
    ]
  });

  const navigate = useNavigate();
  const { postId } = useParams();
  const imgWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const wrapperBox = imgWrapper.current.getBoundingClientRect();
    setBox({ ...box, width: wrapperBox.width, height: wrapperBox.height });
    // postId로 게시글 상세정보 조회
  }, []);
  return (
    <MainWrapper>
      <ContentWrapper>
        <ImgWrapper ref={imgWrapper}>
          <FlowerWrap src={flowerwraps[post.categoryId]} />
          {post.count > 0 &&
            post.messages.map((e) => {
              return (
                <Leaf
                  top={e.y}
                  left={e.x}
                  width={box.width}
                  height={box.height}
                  src={leaves[post.categoryId][e.iconId].url}
                  key={e.msgId}
                />
              );
            })}
        </ImgWrapper>
      </ContentWrapper>
      <StartBtn>꽃 보내기</StartBtn>
    </MainWrapper>
  );
}
