import styled from 'styled-components';

const MainBackground = styled.div`
  padding: 45px 0 0 0;
  background-image: url('/img/main.png');
  background-repeat: no-repeat;
  height: 100%;
  position: inherit;
`;

const BtnPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`;

const NextBtn = styled.button`
  height: 2.5rem;
  width: 80%;
  border: none;
  border-radius: 12px;
  margin-bottom: 45px;
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
