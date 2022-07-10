import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import theme from '../common/style/theme';
import { Button } from '../components/common/style';
import { flowerwraps, leaves } from '../constants';
import { IPost } from '../types';

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

const TextWrapper = styled.div`
  font-size: ${theme.calcRem(30)};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  b {
    font-size: ${theme.calcRem(32)};
    font-weight: bold;
  }
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
  top: ${(props) => `calc(50% + ${props.top * props.height}px)`};
  left: ${(props) => `calc(50% + ${props.left * props.width}px)`};
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

const StartBtn = styled(Button)`
  margin-top: 15px;
  flex-shrink: 0;
`;

export default function PostHome() {
  const [box, setBox] = useState({ width: 0, height: 0 });
  const [post, setPost] = useState<IPost>();

  const navigate = useNavigate();
  const { postId } = useParams();
  const imgWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const wrapperBox = imgWrapper.current.getBoundingClientRect();
    setBox({ ...box, width: wrapperBox.width, height: wrapperBox.height });

    const fetchData = async () => {
      const resp = await axios.get(
        `${process.env.REACT_APP_API_URL}api/post/${postId}`
      );
      setPost(resp.data);
    };
    fetchData();
  }, []);

  const onStartClick = useCallback(() => {
    navigate(`/guest/${postId}`);
  }, []);

  return (
    <MainWrapper>
      <ContentWrapper>
        <TextWrapper>
          {post !== undefined && (
            <>
              <p>
                <b>{post.userNickname}</b>&nbsp;님의 <b>[{post.title}]</b>을
                위한
              </p>
              <p>
                <b>{post.count}</b> 송이의 꽃이 도착했어요.
              </p>
              {post.date}
            </>
          )}
        </TextWrapper>
        <ImgWrapper ref={imgWrapper}>
          {post !== undefined && (
            <>
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
            </>
          )}
        </ImgWrapper>
      </ContentWrapper>
      <StartBtn onClick={onStartClick}>꽃 보내기</StartBtn>
    </MainWrapper>
  );
}
