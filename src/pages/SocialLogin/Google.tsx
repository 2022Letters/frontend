import React from 'react';
import styled from 'styled-components';

const GoogleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  width: 70vw;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  padding: 4px 8px;
  box-shadow: 5px 8px 8px -2px grey;
`;

const GoogleImg = styled.img`
  width: 40px;
  height: 40px;
`;

const GoogleSpan = styled.span`
  width: 100%;
`;

function Google() {
  return (
    <GoogleDiv>
      <GoogleBtn type="button">
        <GoogleImg src="/img/Google.png" alt="Google" />
        <GoogleSpan>구글로 로그인하기</GoogleSpan>
      </GoogleBtn>
    </GoogleDiv>
  );
}

export default Google;
