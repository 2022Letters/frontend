import { useContext } from 'react';
import styled from 'styled-components';
import { IMessageContext, MessageContext } from '../Store/MessageProvider';

const Container = styled.article`
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
  const { messageInfo, setToggle, setCategoryId } = useContext(
    MessageContext
  ) as IMessageContext;

  const makeToggleOff = () => {
    setToggle(false);
  };

  return (
    <div>
      {messageInfo.toggle ? (
        <Container onClick={makeToggleOff}>
          <ModalWrapper>
            <Modal />
          </ModalWrapper>
        </Container>
      ) : null}
    </div>
  );
}

export default LetterModal;
