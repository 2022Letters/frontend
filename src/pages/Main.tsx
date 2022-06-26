import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import _, { debounce } from 'lodash';

const Container = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 375px;
  height: 667px;
  background-color: lavender;
  overflow: auto;
`;

const InputWrapper = styled.article`
  width: 100%;
  margin-top: 4.375rem;
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

const CategoryButton = styled.button`
  position: relative;
`;
export default function Main() {
  const [celebratedList, setCelebratedList] = useState<any>();
  const categoryList = ['생일', '졸업', '결혼', '새해', '기타'];

  useEffect(() => {
    (async () => {
      await getQueryData();
    })();
  }, []);

  const getQueryData = async (value?: string) => {
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
    }
    try {
      setTimeout(() => {
        console.log('data');
      }, 1000);
      const response = 'data';
      setCelebratedList(response);
    } catch (err) {
      console.log(err);
    }
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

  return (
    <Container>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="찾고 싶은 추억을 입력해주세요."
          onChange={onChange}
        />
      </InputWrapper>
      <article>
        {categoryList.map((category) => (
          <CategoryButton type="button" key={category}>
            {category}
          </CategoryButton>
        ))}
      </article>
    </Container>
  );
}
