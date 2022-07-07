/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { getApi } from '../api/baseApi';
import { categoryList } from '../constants';

const Container = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const InputWrapper = styled.article`
  width: 100%;
  margin-top: 4.375rem;
  padding: 0 15px;
`;

const SearchInput = styled.input`
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  display: block;
  width: 70%;
  border-radius: 50px;
  padding: 5px 20px;
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const CategoryWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0.5rem;
  margin: 2rem auto 0;
  padding: 0 15px;
`;

const CategoryButton = styled.button<ICategoryButton>`
  position: relative;
  border-radius: 50px;
  border: none;
  font-size: 2rem;
  padding: 0.25rem;

  background-color: ${(props) =>
    props.index === props.currentCategory.categoryId ? '#FA7272' : '#FFCACA'};
  transition: all 0.2s ease-in;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const EventCardListContainer = styled.div`
  padding: 0 15px;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.625rem;
  grid-row-gap: 3rem;
  margin-bottom: 4rem;
`;

const CreateButtonWrapper = styled.div`
  position: fixed;
  width: 780px;
  bottom: 0;
  padding: 0 15px;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

const CreateButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 15px;
  right: 25px;
  border-radius: 50px;
  background-color: #ffcaca;
  border: none;
  font-size: 2rem;
`;

interface IKeyword {
  keyword?: string;
  categoryId?: number;
}

interface IEventListApi extends IKeyword {
  mode: number;
}

export default function Main() {
  const [userId, setUserId] = useState<number>();
  const [eventList, setEventList] = useState<IEventInfo[]>([
    {
      id: 1,
      title: '싸피의 생일',
      date: '2022-06-30',
      categoryId: 1,
      userNickname: '싸피'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<ICategory>({
    categoryId: null,
    categoryName: ''
  });
  const [currentTargetEvent, setCurrentTargetEvent] = useState(-1);
  const [query, setQuery] = useState('');

  const getUserId = useCallback(() => {
    const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    if (!Object.keys(userInfo).length) return;
    const userId = userInfo?.id;
    setUserId(+userId);
  }, []);

  const getEventListApi = ({ keyword, categoryId, mode }: IEventListApi) => {
    console.log(mode);
    const BASE_API = `/api/posts?userId=${userId}&mode=${mode}`;
    switch (mode) {
      case 3:
        return `${BASE_API}&keyword=${keyword}&categoryId=${categoryId}`;
      case 2:
        return `${BASE_API}&keyword=${keyword}`;
      default:
        return BASE_API;
    }
  };

  useEffect(() => {
    getUserId();
  }, []);
  useEffect(() => {
    (async () => {
      await getEventData({ mode: 1 });
    })();
  }, []);

  const getAllEventList = useCallback(async () => {
    const response = await getApi(getEventListApi({ mode: 1 }));
    console.log(response);
  }, []);

  const getKeywordEventList = useCallback(async ({ keyword }: IKeyword) => {
    const response = await getApi(getEventListApi({ mode: 2, keyword }));
    console.log(response);
  }, []);

  const getCategoryEventList = useCallback(
    async ({ keyword, categoryId }: IKeyword) => {
      const response = await getApi(
        getEventListApi({ mode: 3, keyword, categoryId })
      );
      console.log(response);
    },
    []
  );

  const request = debounce((value, func) => {
    func(value);
  }, 1000);

  const debounceRequest = useCallback(
    (value: IEventListApi, func: object) => request(value, func),
    []
  );

  const onChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    console.log('value', value);
    setQuery(value);
    debounceRequest({ mode: 2, keyword: value }, getEventData);
  };

  const onClickCategory = async (
    event: React.MouseEvent<HTMLButtonElement>,
    category: ICategory
  ) => {
    const {
      currentTarget: { value }
    } = event;
    console.log(category);
    if (value === currentCategory.categoryName) {
      setCurrentCategory({ categoryId: null, categoryName: '' });
      await getEventData({ mode: 1 });
    } else {
      setCurrentCategory(category);
      await getEventData({
        categoryId: category.categoryId,
        keyword: query,
        mode: 3
      });
    }
    console.log('카테고리 서칭 완료');
  };

  const getEventData = useCallback(
    async ({ mode, categoryId, keyword }: IEventListApi) => {
      console.log(mode, categoryId, keyword);
      setIsLoading(true);
      switch (mode) {
        case 2:
          await getKeywordEventList({ categoryId, keyword });
          break;
        case 3:
          await getCategoryEventList({
            categoryId,
            keyword
          });
          break;
        default:
          await getAllEventList();
          break;
      }
      setIsLoading(false);
    },
    [currentCategory]
  );

  const eventInfo: IEventInfo = {
    id: 1,
    title: '싸피의 생일',
    date: '2022-06-30',
    categoryId: 1,
    userNickname: '싸피'
  };

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (event.currentTarget.dataset.menu) return;
    const number = Number(event.currentTarget.dataset.id);
    if (number === currentTargetEvent) {
      setCurrentTargetEvent(-1);
      return;
    }
    setCurrentTargetEvent(number);
  };

  const menu: IMenu = {
    currentTargetEvent,
    toggleMenu
  };
  return (
    <Container onClick={() => setCurrentTargetEvent(-1)}>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="찾고 싶은 추억을 입력해주세요."
          onChange={onChange}
        />
      </InputWrapper>
      <CategoryWrapper>
        {categoryList.map((category) => (
          <CategoryButton
            type="button"
            key={category.categoryId}
            value={category.categoryName}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              onClickCategory(event, category)
            }
            index={category.categoryId}
            currentCategory={currentCategory}
          >
            {category.categoryName}
          </CategoryButton>
        ))}
      </CategoryWrapper>
      {isLoading ? (
        'Loading...'
      ) : (
        <EventCardListContainer>
          <EventCard eventInfo={eventInfo} menu={menu} idx={1} />
          <EventCard eventInfo={eventInfo} menu={menu} idx={2} />
          <EventCard eventInfo={eventInfo} menu={menu} idx={3} />
          <EventCard eventInfo={eventInfo} menu={menu} idx={4} />
        </EventCardListContainer>
      )}
      <CreateButtonWrapper>
        <Link to="/create">
          <CreateButton type="submit">+</CreateButton>
        </Link>
      </CreateButtonWrapper>
    </Container>
  );
}
