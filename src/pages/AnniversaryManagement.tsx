/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import axios from 'axios';
import { useMatch, useNavigate } from 'react-router-dom';
import * as C from '../components/common/style';
import { categoryList } from '../constants';
import { getApi } from '../api/baseApi';
import { toStringByFormatting } from '../common/utils/util';

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
  height: 100vh;
  padding: 0 15px;
`;

const Form = styled.form`
  display: grid;
  width: 100%;
  height: 100vh;
`;

const InputWrapper = styled.article`
  width: 100%;
  margin-top: 4.375rem;
`;

const CategorySelectionWrapper = styled.article`
  width: 100%;
  margin-top: 1rem;
`;

const CategoryButtonListWrapper = styled.div`
  display: grid;
  margin-top: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2rem;
  @media (max-width: 550px) {
    grid-column-gap: 1rem;
  }
`;

const DateWrapper = styled.article`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: start;
  position: relative;
`;

const ToggleControlWrapper = styled.article`
  margin-top: 1rem;
  width: 100%;
`;

const ToggleWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`;

const SubmmitWrapper = styled.article`
  margin-top: 2rem;
`;

const TitleLabel = styled.label`
  font-size: 2rem;
`;

const TitleInput = styled.input.attrs({ required: true, maxLength: 15 })`
  width: 100%;
  outline: none;
  padding: 5px 15px;
  font-size: 1.5rem;
  margin-top: 1rem;
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

const CategoryWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
`;

const CategoryButton = styled.button<ICategoryButtonProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  background-color: ${(props) =>
    props.index === props.currentCategory ? '#FA7272' : '#FFCACA'};
  transition: all 0.2s ease-in;
`;

const DatePickser = styled(ReactDatePicker)`
  margin-left: 10px;
  position: absolute;
`;

const DatePickWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 50px;
  left: 0;
`;

const DateButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  border-bottom: 2px solid #000;
`;

const ToggleInput = styled.input`
  margin-right: 1rem;
  &[type='checkbox'] {
    position: relative;
    border: none;
    -webkit-appearance: none;
    background: #b6b6b6;
    outline: none;
    width: 74px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    &::before {
    }
  }
  &:checked[type='checkbox'] {
    background: #fa7272;
  }

  &[type='checkbox']:before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 20px;
    top: 4px;
    left: 4px;
    background: #fff;
    transform: scale(1.1);
    transition: 600ms ease all;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  &:checked[type='checkbox']:before {
    background: #fff;
    left: 48px;
  }
`;

const ToggleState = styled.span`
  font-size: 1.5rem;
`;

const SubmitButton = styled(C.Button)`
  background-color: #d9d9d9;
`;

const Svg = styled.svg`
  margin-left: 0.5rem;
`;

const CategoryWarningSpan = styled.span`
  font-size: 1.5rem;
  color: red;
`;

interface ICategoryButtonProps {
  index: number | null;
  currentCategory: number | null;
}

interface ICreatedEvent {
  title: string;
  categoryId: number | null;
  date: string;
  visibility: boolean;
  userid?: number;
}
function AnniversaryManagement() {
  const [originalDateInfo, setOriginalDateInfo] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isCategorySelected, setIsCategorySelected] = useState(true);
  const [anniversaryInfo, setAnniversaryInfo] = useState<ICreatedEvent>({
    title: '',
    categoryId: null,
    date: '',
    visibility: false
  });
  const [postId, setPostId] = useState<number>();
  const match = useMatch('/edit/:postId');
  const navigate = useNavigate();
  useEffect(() => {
    if (!match) {
      const today = toStringByFormatting(originalDateInfo);
      setAnniversaryInfo({ ...anniversaryInfo, date: today });
      return;
    }
    const currentPostId = match?.params?.postId;
    if (currentPostId) {
      setPostId(+currentPostId);
    }
    (async () => {
      // const response = await getApi(`/api/post/set/${currentPostId}`);
      setAnniversaryInfo({
        title: '싸피의 생일',
        categoryId: 2,
        date: '2022-07-03',
        visibility: true
      });
      setOriginalDateInfo(new Date());
    })();
  }, []);

  const modifyDateFormat = useCallback(
    (source: Date) => {
      const date = toStringByFormatting(source);
      setOriginalDateInfo(new Date(date));
      setAnniversaryInfo({ ...anniversaryInfo, date });
    },
    [anniversaryInfo]
  );

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setIsOpen(!isOpen);
    },
    []
  );

  const changeTitle = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      event.preventDefault();
      setAnniversaryInfo({ ...anniversaryInfo, [name]: value });
    },
    [anniversaryInfo]
  );

  const onClickCategory = useCallback(
    (categoryId: number) => {
      setIsCategorySelected(true);
      setAnniversaryInfo({ ...anniversaryInfo, categoryId });
    },
    [anniversaryInfo]
  );

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      console.log(anniversaryInfo);
      event.preventDefault();
      if (!anniversaryInfo.title) return;
      if (!anniversaryInfo.categoryId) {
        setIsCategorySelected(false);
        return;
      }
      navigate(`/${postId}`);
      if (!match) {
        console.log(match);
        navigate(`/1`);
        const response = await axios.post('/api/post', {
          data: anniversaryInfo
        });
      } else {
        await axios.put(`/api/post/${postId}`, { data: anniversaryInfo });
        navigate(`/${postId}`);
      }
    },
    [anniversaryInfo]
  );

  const stayCalanderOn = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setIsOpen(true);
    },
    []
  );

  return (
    <Container
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <Form onSubmit={onSubmit}>
        <AllyHiddenTitle>글쓰기</AllyHiddenTitle>
        <InputWrapper>
          <TitleLabel htmlFor="title">제목</TitleLabel>
          <TitleInput
            type="text"
            id="title"
            name="title"
            value={anniversaryInfo.title}
            onChange={changeTitle}
            placeholder="기념일 제목을 입력해주세요."
          />
          <TitleInformation>제목은 15자 이하로 작성해주세요.</TitleInformation>
        </InputWrapper>
        <CategorySelectionWrapper>
          <DetailedTitle>
            카테고리{' '}
            {!isCategorySelected && (
              <CategoryWarningSpan>
                카테고리를 선택해주세요.
              </CategoryWarningSpan>
            )}
          </DetailedTitle>

          <CategoryButtonListWrapper>
            {categoryList?.map((category: ICategory) => (
              <CategoryWrapper key={category.categoryId}>
                <CategoryButton
                  type="button"
                  index={category.categoryId}
                  currentCategory={anniversaryInfo.categoryId}
                  onClick={() => onClickCategory(category.categoryId)}
                  date-id={category.categoryId}
                  value={category.categoryName}
                >
                  {category.categoryName}
                </CategoryButton>
              </CategoryWrapper>
            ))}
          </CategoryButtonListWrapper>
        </CategorySelectionWrapper>
        <DateWrapper>
          <DetailedTitle>날짜: </DetailedTitle>
          <DateButton onClick={handleClick} type="button">
            {anniversaryInfo?.date}
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </Svg>
          </DateButton>
          <DatePickWrapper onClick={stayCalanderOn}>
            {isOpen && (
              <DatePickser
                locale={ko}
                selected={originalDateInfo}
                onChange={(date: Date) => {
                  modifyDateFormat(date);
                }}
                inline
              />
            )}
          </DatePickWrapper>
        </DateWrapper>
        <ToggleControlWrapper>
          <DetailedTitle>게시글 공개 여부</DetailedTitle>
          <ToggleWrapper>
            <ToggleInput
              type="checkbox"
              checked={anniversaryInfo.visibility}
              onChange={() => {
                setAnniversaryInfo({
                  ...anniversaryInfo,
                  visibility: !anniversaryInfo.visibility
                });
              }}
            />
            <ToggleState>
              {anniversaryInfo.visibility ? '공개' : '비공개'}
            </ToggleState>
          </ToggleWrapper>
        </ToggleControlWrapper>
        <SubmmitWrapper>
          <SubmitButton type="submit">{postId ? '수정' : '등록'}</SubmitButton>
        </SubmmitWrapper>
      </Form>
    </Container>
  );
}

export default AnniversaryManagement;
