import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/common/style';

const MainBackground = styled.div`
  padding: 45px 0 0 0;
  background-image: url('/img/main.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  position: inherit;
`;

const BtnPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  padding: 0 15px;
`;

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    // 테스트 코드
    // const user = {
    //   id: 11,
    //   nickname: '선물선물'
    // };
    // localStorage.setItem('user', JSON.stringify(user));
  });

  const mainClick = () => {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      navigate('/main');
    } else {
      navigate('/login');
    }
  };
  return (
    <MainBackground>
      <BtnPosition>
        <Button onClick={mainClick}>꽃다발 만들기</Button>
      </BtnPosition>
    </MainBackground>
  );
}

export default LandingPage;
