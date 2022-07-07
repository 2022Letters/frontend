/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { IMessageContext, MessageContext } from '../Store/MessageProvider';
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
  const { messageInfo, setCategoryId, setMsgId, setToggle } = useContext(
    MessageContext
  ) as IMessageContext;

  const onClick = useCallback((msgId: number) => {
    setCategoryId(categoryId);
    setMsgId(msgId);
    setToggle(true);
  }, []);
  return (
    <Container>
      {messages.map((message) => (
        <MessageLinkWrapper key={message.msgId}>
          <ListMessageButton
            message={message}
            categoryId={categoryId}
            onClick={onClick}
          />
        </MessageLinkWrapper>
      ))}
    </Container>
  );
}

export default React.memo(FlowerList);
