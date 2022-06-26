import React from 'react';
import styled from 'styled-components';

const KaKaoDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const KakaoBtn = styled.button`
  display: flex;
  align-items: center;
  width: 70vw;
  border: none;
  border-radius: 6px;
  background-color: #fee500;
  padding: 4px 8px;
  box-shadow: 5px 8px 8px -2px grey;
`;

const KakaoImg = styled.img`
  width: 40px;
  height: 40px;
`;

const KakaoSpan = styled.span`
  width: 100%;
`;

function Kakao() {
  return (
    <KaKaoDiv>
      <KakaoBtn type="button">
        <KakaoImg src="/img/kakao.png" alt="kakao" />
        <KakaoSpan>카카오로 로그인하기</KakaoSpan>
      </KakaoBtn>
    </KaKaoDiv>
  );
}

export default Kakao;
