import styled from 'styled-components';
import { Button } from '../components/common/style';

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
  padding: 0 15px;
`;
// `;

function LandingPage() {
  return (
    <MainBackground>
      <BtnPosition>
        <Button>꽃다발 만들기</Button>
      </BtnPosition>
    </MainBackground>
  );
}

export default LandingPage;
