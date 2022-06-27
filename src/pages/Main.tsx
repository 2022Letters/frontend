/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import EventCard from '../components/EventCard';

interface CategoryButton {
  index: string;
  currentCategory: string;
}

const Container = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  background-color: lavender;
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
  display: block;
  width: 70%;
  height: 30px;
  border-radius: 50px;
  padding-left: 20px;
  padding-right: 20px;
  &:focus {
    outline: none;
  }
`;

const CategoryWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0.5rem;
  margin: 2rem auto 0;
  padding: 0 15px;
`;

const CategoryButton = styled.button<CategoryButton>`
  position: relative;
  border-radius: 50px;
  border: none;
  padding: 0.25rem;
  background-color: ${(props) =>
    props.index === props.currentCategory ? '#FA7272' : '#FFCACA'};
  transition: all 0.2s ease-in;
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
  right: 15px;
  border-radius: 50px;
  background-color: #ffcaca;
  border: none;
  font-size: 2rem;
`;
export default function Main() {
  const [celebratedList, setCelebratedList] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentTargetEvent, setCurrentTargetEvent] = useState(-1);
  const categoryList = ['생일', '졸업', '결혼', '새해', '기타'];

  useEffect(() => {
    (async () => {
      await getQueryData();
    })();
  }, []);

  const getCategoryEventList = async () => {
    try {
      const response = await axios.get(`${currentCategory}`);
    } catch (err) {
      console.log(err);
    }
  };

  const getQueryData = async (value?: string) => {
    setIsLoading(true);
    const body = { query: value };
    if (value) {
      try {
        setTimeout(() => {
          console.log('data');
        }, 1000);
        const response = 'data';

        setCelebratedList(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        setTimeout(() => {
          console.log('data');
        }, 1000);
        const response = 'data';
        setCelebratedList(response);
      } catch (err) {
        console.log(err);
      }
    }
    setIsLoading(false);
  };

  const request = debounce((value, func) => {
    func(value);
  }, 1000);

  const debounceRequest = useCallback(
    (value: string, func: object) => request(value, func),
    []
  );

  const onChange = async (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    debounceRequest(value, getQueryData);
  };

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value }
    } = event;
    if (value === currentCategory) {
      setCurrentCategory('');
      await getQueryData();
      return;
    }
    setIsLoading(true);
    setCurrentCategory(value);
    await getCategoryEventList();
    setIsLoading(false);
  };

  const eventInfo: IEventInfo = {
    category: '생일',
    bouquet:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VQF4Pjjbtd2gQ1GfDtgolMrZmJHFqsw_Qg&usqp=CAU',
    date: '2022.06.25',
    title: '20살 나의 생일',
    id: 20
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
            key={category}
            value={category}
            onClick={onClick}
            index={category}
            currentCategory={currentCategory}
          >
            {category}
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
        </EventCardListContainer>
      )}
      <CreateButtonWrapper>
        <CreateButton type="submit">+</CreateButton>
      </CreateButtonWrapper>
    </Container>
  );
}
