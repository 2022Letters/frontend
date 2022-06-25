import styled from 'styled-components';

const MainBackground = styled.div`
  background-image: url('/img/main.png');
  background-size: cover;
  height: 100%;
`;

const NextBtn = styled.button`
  position: absolute;
  bottom: 80px;
  width: 80%;
  border: none;
`;

function LandingPage() {
  return (
    <MainBackground>
      <NextBtn>꽃다발 만들기</NextBtn>
    </MainBackground>
  );
}

export default LandingPage;
