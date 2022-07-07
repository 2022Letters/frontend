import { useContext, useRef } from 'react';
import styled from 'styled-components';
import { IMessageContext, MessageContext } from '../Store/MessageProvider';

const Container = styled.article``;

const Background = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: auto;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 15px;
  opacity: 1;
`;

function LetterModal() {
  const modal = useRef(null);
  const { messageInfo, setToggle, setCategoryId } = useContext(
    MessageContext
  ) as IMessageContext;

  const makeToggleOff = () => {
    setToggle(false);
  };

  const toggleStop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === modal.current) {
      event.stopPropagation();
    }
  };

  return (
    <Container>
      {messageInfo.toggle ? (
        <Background onClick={makeToggleOff}>
          <ModalWrapper>
            <Modal ref={modal} onClick={toggleStop} />
          </ModalWrapper>
        </Background>
      ) : null}
    </Container>
  );
}

export default LetterModal;
