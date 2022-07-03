import styled from 'styled-components';

const Container = styled.article`
  margin: 2rem 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
`;

function FlowerList() {
  return (
    <Container>
      <div>꽃이다.</div>
    </Container>
  );
}

export default FlowerList;
