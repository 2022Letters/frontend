import React from 'react';
import styled from 'styled-components';

const NickWrap = styled.div`
  height: 100%;
  padding: 45px 20px 0;
`;

const NickTitle = styled.h2`
  margin-bottom: 40px;
`;

const NickBody = styled.div`
  display: flex;
  flex-direction: column;
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

const BtnPosition = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 45px;
`;

const NickBtn = styled.button`
  height: 2.5rem;
  width: 100%;
  border: none;
  border-radius: 12px;
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
        <BtnPosition>
          <NickBtn type="button">완료</NickBtn>
        </BtnPosition>
      </NickBody>
    </NickWrap>
  );
}
export default Nickname;
