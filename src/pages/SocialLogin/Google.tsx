import React from 'react';
import styled from 'styled-components';
import {
  SocialDiv,
  SocialBtn,
  SocialImg,
  SocialSpan
} from '../../components/common/style';

function Google() {
  return (
    <SocialDiv>
      <SocialBtn type="button" color="#fff">
        <SocialImg src="/img/Google.png" alt="Google" />
        <SocialSpan>구글로 로그인하기</SocialSpan>
      </SocialBtn>
    </SocialDiv>
  );
}

export default Google;
