import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  width: 20px;
  height: 20px;
  border-top: 3.5px solid #000;
  border-left: 3.5px solid #000;
  transform: rotate(-45deg);
  flex-shrink: 0;
`;

function BackBtn() {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, []);

  return <Button onClick={onBackClick} />;
}

export default BackBtn;
