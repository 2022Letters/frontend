/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import theme from '../common/style/theme';
import { Button } from '../components/common/style';
import { flowerwraps, leaves } from '../constants';
import FlowerList from '../components/HostFlow/FlowerList';
import LetterModal from '../components/HostFlow/LetterModal';
import MessageProvider from '../api/Store/MessageProvider';
import { postDetailApi } from '../api/Apis';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;
  position: relative;
  display: flow-root;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 90%;
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

const ImgWrapper = styled.div<{ isListMode: boolean }>`
  height: 100%;
  width: 100%;
  position: relative;
  display: flow-root;
  padding: ${(props) => props.isListMode && '1rem 0'};
  overflow-y: scroll;
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

const HostButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  height: 10%;
`;

const SendBtn = styled(Button)`
  width: 100%;
  margin-bottom: 0;
`;

const MessageDisplayChangeBtn = styled(Button)`
  width: 50px;
  font-weight: bold;
  margin-bottom: 0;
`;

export default function PostHome() {
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
        nickname: '김서울',
        content: '블라블라',
        x: 0.04230769230769231,
        y: -0.39609483960948394
      },
      {
        msgId: 2,
        iconId: 2,
        nickname: '박광주',
        content: '블라블라',
        x: -0.19038461538461537,
        y: 0.10739191073919108
      },
      {
        msgId: 3,
        iconId: 0,
        nickname: '김대전',
        content: '블라블라',
        x: -0.19038461538461537,
        y: 0.10739191073919108
      }
    ]
  });
  const [userId, setUserId] = useState<number>();
  const [copied, setCopied] = useState(false);
  const [isListMode, setIsListMode] = useState(false);
  const navigate = useNavigate();
  const postUrl = window.location.href;
  const { postId } = useParams();
  const imgWrapper = useRef() as React.MutableRefObject<HTMLDivElement>;
  const getUserId = useCallback(() => {
    const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    if (!Object.keys(userInfo).length) return;
    const userId = userInfo?.id;
    setUserId(+userId);
  }, []);

  useEffect(() => {
    getUserId();
    const wrapperBox = imgWrapper.current.getBoundingClientRect();
    setBox({ ...box, width: wrapperBox.width, height: wrapperBox.height });

    // const fetchData = async () => {
    //   const resp = await postDetailApi(Number(postId));
    //   setPost(resp.data);
    // };
    // fetchData();
  }, []);

  const onStartClick = useCallback(() => {
    navigate(`/guest/${postId}`);
  }, []);

  const copyLink = useCallback(async () => {
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(postUrl);
    }
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
  }, []);

  const handlePostUrl = () => {
    if (navigator.share) {
      navigator.share({
        title: `${post?.userNickname} 님을 위한 꽃다발`,
        text: `${post?.userNickname} 님에게 꽃 전달하러 가기`,
        url: postUrl
      });
    } else {
      copyLink();
    }
  };

  return (
    <MessageProvider>
      <MainWrapper>
        <LetterModal />
        <ContentWrapper>
          <TextWrapper>
            <p>
              <b>{post.userNickname}</b>&nbsp;님의 <b>[{post.title}]</b>을 위한
            </p>
            <p>
              <b>{post.count}</b> 송이의 꽃이 도착했어요.
            </p>
            {post.date}
          </TextWrapper>
          <ImgWrapper ref={imgWrapper} isListMode={isListMode}>
            {isListMode ? (
              <FlowerList
                messages={post.messages}
                categoryId={post.categoryId}
              />
            ) : (
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
        <HostButtonWrapper>
          {post.userId !== userId ? (
            <>
              <SendBtn onClick={handlePostUrl}>
                {copied ? '링크 복사 완료!' : '링크 복사'}
              </SendBtn>
              <MessageDisplayChangeBtn
                type="button"
                onClick={() => setIsListMode((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list-ul"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  />
                </svg>
              </MessageDisplayChangeBtn>
            </>
          ) : (
            <StartBtn onClick={onStartClick}>꽃 보내기</StartBtn>
          )}
        </HostButtonWrapper>
      </MainWrapper>
    </MessageProvider>
  );
}
