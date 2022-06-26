import React from 'react';
import styled from 'styled-components';

const NickWrap = styled.div`
  height: 100%;
`;

const NickTitle = styled.h2`
  margin-bottom: 40px;
`;

const NickBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const NickDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const NickInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1.2px solid;
  box-shadow: 5px 8px 8px -2px grey;
`;
const NickMsg = styled.span`
  margin: 15px 0;
  font-size: 2vh;
  color: red;
`;

const NickBtn = styled.button`
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

function Nickname() {
  return (
    <NickWrap>
      <NickTitle>닉네임을 입력해주세요</NickTitle>
      <NickBody>
        <NickDiv>
          <NickInput />
          <NickMsg>변경이 불가하니 신중히 선택해주세요.</NickMsg>
        </NickDiv>
        <NickBtn type="button">완료</NickBtn>
      </NickBody>
    </NickWrap>
  );
}
export default Nickname;
