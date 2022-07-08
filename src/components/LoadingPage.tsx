import styled from 'styled-components';

const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Loading = styled.img`
  width: 220px;
`;

function LoadingPage() {
  return (
    <LoadingDiv>
      <Loading src="/img/loading.gif" alt="loading" />
      로딩중...
    </LoadingDiv>
  );
}

export default LoadingPage;
