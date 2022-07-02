import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';

import { Button } from '../components/common/style';
import BackBtn from '../components/common/BackBtn';
import LeafSelect from '../components/GuestFlow/LeafSelect';
import GuestWrite from '../components/GuestFlow/GuestWrite';
import GuestLayout from '../components/GuestFlow/GuestLayout';
import { postDetailApi } from '../api/Apis';

interface IMainWrapper {
  isZeroStep: boolean;
}

const MainWrapper = styled.div<IMainWrapper>`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.isZeroStep ? 'space-between' : 'initial'};
  padding: 45px 15px 0 15px;
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

export default function GuestFlow() {
  const [step, setStep] = useState(0);
  const [nickname, setNickname] = useState('');
  const [text, setText] = useState('');
  const [iconId, setIconId] = useState(0);
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
        nickname: '싸피친구1',
        msgId: 1,
        iconId: 1,
        x: 0.04230769230769231,
        y: -0.39609483960948394
      },
      {
        nickname: '싸피친구2',
        msgId: 2,
        iconId: 2,
        x: -0.19038461538461537,
        y: 0.10739191073919108
      }
    ]
  });

  const { postId } = useParams();

  useEffect(() => {
    // const fetchData = async () => {
    //   const resp = postDetailApi(postId);
    //   setPost(resp.data);
    // };
    // fetchData();
  }, []);

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
    setStep((prev) => prev - 1);
  }, []);

  const onNextClick = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  }, []);

  return (
    <MainWrapper isZeroStep={step === 0}>
      {step > 0 ? <PrevBtn onClick={onPrevClick} /> : <BackBtn />}
      {step === 0 && <LeafSelect iconId={iconId} setIconId={setIconId} />}
      {step === 1 && (
        <GuestWrite
          post={post}
          setStep={setStep}
          nickname={nickname}
          onNicknameChange={onNicknameChange}
          text={text}
          onTextChange={onTextChange}
        />
      )}
      {step === 2 && (
        <GuestLayout
          post={post}
          iconId={iconId}
          nickname={nickname}
          text={text}
        />
      )}
      {step === 0 && <NextBtn onClick={onNextClick}>다음</NextBtn>}
    </MainWrapper>
  );
}
