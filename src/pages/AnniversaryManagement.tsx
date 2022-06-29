import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as C from '../components/common/style';

const Container = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  background-color: lavender;
  padding: 0 15px;
  overflow: auto;
`;

const InputWrapper = styled.article`
  width: 100%;
  margin-top: 4.375rem;
`;

const CategoryWrapper = styled.article`
  width: 100%;
  background-color: red;
`;

const DateWrapper = styled.article`
  width: 100%;
`;

const ToggleWrapper = styled.article`
  width: 100%;
`;

function AnniversaryManagement() {
  const [startDate, setStateDate] = useState(new Date());
  const categoryList = ['생일', '졸업', '결혼', '새해', '기타'];
  return (
    <Container>
      <InputWrapper>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" name="title" />
        <small>제목은 15자 미만으로 작성해주세요.</small>
      </InputWrapper>
      <CategoryWrapper>
        {categoryList?.map((category) => (
          <button type="button" key={category}>
            {category}
          </button>
        ))}
      </CategoryWrapper>
      <DateWrapper>
        <p>날짜: </p>
        <ReactDatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date: Date) => setStateDate(date)}
        />
      </DateWrapper>
      <ToggleWrapper>
        <p>게시글 공개 여부</p>
      </ToggleWrapper>
      <C.Button type="button">등록</C.Button>
    </Container>
  );
}

export default AnniversaryManagement;
