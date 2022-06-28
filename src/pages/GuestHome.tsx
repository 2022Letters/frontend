// import { useCallback } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// import BackgroundImg from '../assets/imgs/temp.png';
// import theme from '../common/style/theme';
// import { Button } from '../components/common/style';

// const MainWrapper = styled.div`
//   width: 100%;
//   min-height: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   padding: 45px 15px 0 15px;
// `;

// const ContentWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const TextWrapper = styled.div`
//   font-size: ${theme.calcRem(30)};
//   flex-shrink: 0;
//   b {
//     font-size: ${theme.calcRem(32)};
//   }
// `;

// const ImgWrapper = styled.div`
//   height: 100%;
// `;

// const BackgroundImage = styled.img`
//   height: 100%;
//   width: 100%;
// `;

// const StartBtn = styled(Button)`
//   margin-top: 15px;
//   flex-shrink: 0;
// `;

// function GuestHome() {
//   const navigate = useNavigate();

//   const onStartClick = useCallback(() => {
//     navigate('/guest/select');
//   }, []);

//   return (
//     <MainWrapper>
//       <ContentWrapper>
//         <TextWrapper>
//           <b>닉네임</b>&nbsp;님에게
//           <br />
//           <b>10</b> 송이의 꽃이 도착했어요.
//           <br />
//           2022.06.26
//         </TextWrapper>
//         <ImgWrapper>
//           <BackgroundImage src={BackgroundImg} />
//         </ImgWrapper>
//       </ContentWrapper>
//       <StartBtn onClick={onStartClick}>꽃 보내기</StartBtn>
//     </MainWrapper>
//   );
// }

// export default GuestHome;

import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import theme from '../common/style/theme';
import { Button } from '../components/common/style';
import BackGroundImg from '../assets/imgs/temp.png';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px 15px 0 15px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  font-size: ${theme.calcRem(30)};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  b {
    font-size: ${theme.calcRem(32)};
  }
`;

const BackgroundImage = styled.img`
  height: 100%;
`;

const StartBtn = styled(Button)`
  margin-top: 15px;
  flex-shrink: 0;
`;

function GuestWrite() {
  const navigate = useNavigate();

  const onStartClick = useCallback(() => {
    navigate('/guest/select');
  }, []);

  return (
    <MainWrapper>
      <ContentWrapper>
        <TextWrapper>
          <p>
            <b>닉네임</b>&nbsp;님에게
          </p>
          <p>
            <b>10</b> 송이의 꽃이 도착했어요.
          </p>
          2022.06.26
        </TextWrapper>
        <BackgroundImage src={BackGroundImg} />
      </ContentWrapper>
      <StartBtn onClick={onStartClick}>꽃 보내기</StartBtn>
    </MainWrapper>
  );
}

export default GuestWrite;
