import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [query, setQuery] = useState('');
  const categoryList = ['생일', '졸업', '결혼', '새해', '기타'];

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    setQuery(value);
  };

  const getQueryData = async () => {
    const body = { query };
    const response = await axios.post('abc', body);
  };

  return (
    <Container>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="찾고 싶은 추억을 입력해주세요."
          value={query}
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
