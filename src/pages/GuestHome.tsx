import { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import BackgroundImg from '../assets/imgs/temp.png';
import theme from '../common/style/theme';
import { Button } from '../components/common/style';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%; //calc(100vh - 45px);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 45px 15px 0 15px;
`;

const TextWrapper = styled.div`
  font-size: ${theme.calcRem(30)};
  b {
    font-size: ${theme.calcRem(32)};
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const BtnArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function GuestHome() {
  const navigate = useNavigate();

  const onStartClick = useCallback(() => {
    navigate('/guest/select');
  }, []);

  return (
    <MainWrapper>
      <TextWrapper>
        <b>닉네임</b>&nbsp;님에게
        <br />
        <b>10</b> 송이의 꽃이 도착했어요.
        <br />
        2022.06.26
      </TextWrapper>
      <BackgroundImage src={BackgroundImg} />
      <BtnArea>
        <Button onClick={onStartClick}>꽃 보내기</Button>
      </BtnArea>
    </MainWrapper>
  );
}

export default GuestHome;
