import React from 'react';
import {
  SocialBtn,
  SocialDiv,
  SocialImg,
  SocialSpan
} from '../../components/common/style';

function Kakao() {
  return (
    <SocialDiv>
      <SocialBtn type="button" color="#fee500">
        <SocialImg src="/img/kakao.png" alt="kakao" />
        <SocialSpan>카카오로 로그인하기</SocialSpan>
      </SocialBtn>
    </SocialDiv>
  );
}

export default Kakao;
