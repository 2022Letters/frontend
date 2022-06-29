import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import * as C from '../components/common/style';

const borderColor = keyframes`
  0% {
    border-color: transparent
  } 100%{
    border-color: #000
  }
`;

const Container = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  overflow: auto;
  background-color: lavender;
`;

const InputWrapper = styled.article`
  width: 100%;
  margin-top: 4.375rem;
`;

const CategoryWrapper = styled.article`
  width: 100%;
`;

const DateWrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const ToggleWrapper = styled.article`
  width: 100%;
`;

const TitleLabel = styled.label`
  font-size: 2rem;
`;

const TitleInput = styled.input`
  width: 100%;
  outline: none;
  padding: 5px 15px;
  font-size: 1.5rem;
  margin-top: 5px;
  border: 2px solid transparent;
  border-radius: 0;
  border-bottom: 2px solid #000;
  &:focus {
    animation: ${borderColor} 0.5s linear alternate forwards;
    border-radius: 10px;
  }
`;

const TitleInformation = styled.small`
  display: block;
  margin-top: 5px;
`;

const AllyHiddenTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`;

const DetailedTitle = styled.h2`
  font-size: 2rem;
  min-width: fit-content;
  margin-right: 1rem;
`;

const DatePickser = styled(ReactDatePicker)`
  margin-left: 10px;
  position: absolute;
  input {
    border: none;
    outline: none;
    &:focus-visible {
      outline: none;
    }
  }
`;

const DatePickWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
`;

const DateButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
`;

function AnniversaryManagement() {
  const [originalDateInfo, setOriginalDateInfo] = useState(new Date());
  const [refinedDate, setRefinedDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    toStringByFormatting(originalDateInfo);
  }, []);

  const leftPad = (value: any) => {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  };

  const toStringByFormatting = (source: Date, delimiter = '.') => {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());
    const date = [year, month, day].join(delimiter);
    setOriginalDateInfo(new Date(date));
    setRefinedDate(date);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const categoryList = ['생일', '졸업', '결혼', '새해', '기타'];
  return (
    <Container>
      <AllyHiddenTitle>글쓰기</AllyHiddenTitle>
      <InputWrapper>
        <TitleLabel htmlFor="title">제목</TitleLabel>
        <TitleInput
          type="text"
          id="title"
          name="title"
          placeholder="기념일 제목을 입력해주세요."
        />
        <TitleInformation>제목은 15자 미만으로 작성해주세요.</TitleInformation>
      </InputWrapper>
      <CategoryWrapper>
        <DetailedTitle>카테고리</DetailedTitle>
        {categoryList?.map((category) => (
          <button type="button" key={category}>
            {category}
          </button>
        ))}
      </CategoryWrapper>
      <DateWrapper>
        <DetailedTitle>날짜: </DetailedTitle>
        <DateButton onClick={handleClick} type="button">
          {refinedDate}
        </DateButton>
        <DatePickWrapper>
          {isOpen && (
            <DatePickser
              locale={ko}
              selected={originalDateInfo}
              onChange={(date: Date) => {
                setIsOpen(!isOpen);
                toStringByFormatting(date);
              }}
              inline
            />
          )}
        </DatePickWrapper>
      </DateWrapper>
      <ToggleWrapper>
        <DetailedTitle>게시글 공개 여부</DetailedTitle>
      </ToggleWrapper>
      <C.Button type="button">등록</C.Button>
    </Container>
  );
}

export default AnniversaryManagement;
