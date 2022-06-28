import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import styled from 'styled-components';

import Back from '../../assets/imgs/arrow.png';

const Button = styled.img`
  width: 30px;
  height: 30px;
`;

function BackBtn() {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, []);

  return <Button src={Back} onClick={onBackClick} />;
}

export default BackBtn;
