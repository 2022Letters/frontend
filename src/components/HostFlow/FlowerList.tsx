/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import styled from 'styled-components';
import { MessageContext } from '../Store/MessageProvider';
import LetterModal from './LetterModal';
import ListMessageButton from './ListMessageButton';

const Container = styled.article`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: scroll;
`;

const MessageLinkWrapper = styled.div`
  width: 100%;
`;

interface IFlowerListProps {
  messages: IMessage[];
  categoryId: number;
}
function FlowerList({ messages, categoryId }: IFlowerListProps) {
  console.log(useContext(MessageContext));
  return (
    <Container>
      {messages.map((message) => (
        <MessageLinkWrapper key={message.msgId}>
          <ListMessageButton message={message} categoryId={categoryId} />
        </MessageLinkWrapper>
      ))}
    </Container>
  );
}

export default FlowerList;
