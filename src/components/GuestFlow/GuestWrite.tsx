import { useCallback, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';

import theme from '../../common/style/theme';
import { letters } from '../../constants';
import { IPost } from '../../types';
import { Button } from '../common/style';

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

const NextBtn = styled(Button)`
  margin-top: 15px;
  flex-shrink: 0;
`;

const CountLength = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

interface Props {
  post: IPost;
  setStep: Dispatch<SetStateAction<number>>;
  nickname: string;
  onNicknameChange(e: React.FormEvent<HTMLInputElement>): void;
  text: string;
  onTextChange(e: React.FormEvent<HTMLTextAreaElement>): void;
}

export default function GuestWrite({
  post,
  setStep,
  nickname,
  onNicknameChange,
  text,
  onTextChange
}: Props) {
  const onNextClick = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  }, []);

  const prevent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') e.preventDefault();
    return false;
  };

  return (
    <ContentWrapper onSubmit={(e) => onNextClick(e)}>
      <input hidden />
      <NicknameInput
        placeholder="닉네임 (최대 10자)"
        required
        maxLength={10}
        onChange={onNicknameChange}
        value={nickname}
        onKeyDown={prevent}
      />
      <LetterWrapper>
        <Letter required onChange={onTextChange} value={text} />
        <LetterImg src={letters[post.categoryId]} />
      </LetterWrapper>
      <NextBtn>다음</NextBtn>
    </ContentWrapper>
  );
}
