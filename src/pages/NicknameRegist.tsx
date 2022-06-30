import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Title } from '../components/common/style';

const NickWrap = styled.div`
  height: 100%;
  padding: 45px 20px 0;
`;

const NickTitle = styled(Title)`
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
  padding: 10px;
  font-size: 26px;
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

function NicknameRegist() {
  const [nickname, setNickname] = useState('');

  const location = useLocation();

  const changeNickname = (e: any) => {
    setNickname(e.target.value);
  };

  const registUser = () => {
    console.log(location.state);
    const email = location.state;
    // const data = {
    //   nickname,
    //   email
    // };
    console.log(email);
    console.log(nickname);
    if (email) {
      axios
        .post(`/login/user/nickname`, {
          nickname,
          email
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <NickWrap>
      <NickTitle>닉네임을 입력해주세요</NickTitle>
      <NickBody>
        <NickDiv>
          <NickInput
            type="text"
            onChange={(e) => changeNickname(e)}
            value={nickname}
            placeholder="닉네임은 10자이내로 작성해주세요!"
            maxLength={10}
          />
          <NickMsg>변경이 불가하니 신중히 선택해주세요.</NickMsg>
        </NickDiv>
        <BtnPosition>
          <Button type="button" onClick={registUser}>
            완료
          </Button>
        </BtnPosition>
      </NickBody>
    </NickWrap>
  );
}
export default NicknameRegist;
