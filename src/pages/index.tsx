import styled from 'styled-components';

const MainBackground = styled.div`
  background-image: url('/img/main.png');
  background-size: cover;
  height: 100%;
`;

const NextBtn = styled.button`
  height: 2.5rem;
  width: 80%;
  border: none;
  border-radius: 12px;
`;

const BtnPosition = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: absolute;
  bottom: 45px;
`;

function LandingPage() {
  return (
    <MainBackground>
      <BtnPosition>
        <NextBtn>꽃다발 만들기</NextBtn>
      </BtnPosition>
    </MainBackground>
  );
}

export default LandingPage;
