import { useContext, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { getApi } from '../../api/baseApi';
import { toStringByFormatting } from '../../common/utils/util';
import { letters } from '../../constants';
import { IMessageContext, MessageContext } from '../../Store/MessageProvider';

interface IMessageImage {
  category: number | null;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`;

const Container = styled.article``;

const Background = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: auto;
  padding: 2rem 0;
  animation: ${fadeIn} 0.5s alternate;
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
  background-image: none;
  border-radius: 15px;
`;

const BackgroundPaper = styled.div<IMessageImage>`
  padding: 1rem;
  width: 100%;
  min-height: 100%;
  background: ${(props) => props.category && `url(${letters[props.category]})`}
    no-repeat center;
  background-size: cover;
  p {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

function LetterModal() {
  const [message, setMessage] = useState<IMessageDetail>({
    msgId: null,
    postId: null,
    iconId: null,
    nickname: '',
    content: '',
    createdAt: '',
    x: null,
    y: null
  });
  const [refinedDate, setRefinedDate] = useState('');
  const modal = useRef(null);
  const { messageInfo, setToggle } = useContext(
    MessageContext
  ) as IMessageContext;

  useEffect(() => {
    if (messageInfo.msgId && messageInfo.toggle) {
      (async () => {
        // const response = await getApi(`api/msg/${messageInfo.msgId}`);
        setMessage({
          msgId: 1,
          postId: 1,
          iconId: 2,
          nickname: '간장공장공',
          content: `
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
`,
          createdAt: '2022-06-29T08:45:09.000+00:00',
          x: null,
          y: null
        });
        const date = toStringByFormatting(message.createdAt);
        setRefinedDate(date);
      })();
    }
  }, []);

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
            <Modal ref={modal} onClick={toggleStop}>
              <BackgroundPaper category={messageInfo.categoryId}>
                <p>{message.nickname}</p>
                <p>{message.content}</p>
                <p>{refinedDate}</p>
              </BackgroundPaper>
            </Modal>
          </ModalWrapper>
        </Background>
      ) : null}
    </Container>
  );
}

export default LetterModal;
