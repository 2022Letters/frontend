import React, { useCallback } from 'react';
import styled from 'styled-components';
import { leaves } from '../../constants';

const ContainerButton = styled.button`
  background-color: transparent;
  width: 100%;
  border: none;
`;

const FlowerImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const FlowerImg = styled.img`
  width: 100%;
`;

const NickNameWrapper = styled.div``;

const NickName = styled.div`
  font-size: 1.25rem;
`;

interface IListMessageButtonProps {
  message: IMessage;
  categoryId: number;
  onClick: (msgId: number) => void;
}

function ListMessageButton({
  message,
  categoryId,
  onClick
}: IListMessageButtonProps) {
  const sendMsgId = useCallback(() => {
    const { msgId } = message as IMessage;
    onClick(msgId);
  }, []);
  console.log(message.msgId);
  return (
    <ContainerButton type="button" onClick={sendMsgId}>
      <FlowerImageWrapper>
        <FlowerImg
          src={leaves[categoryId][message.iconId].url}
          alt={`${message.nickname}의 편지`}
        />
      </FlowerImageWrapper>
      <NickNameWrapper>
        <NickName>{message.nickname}</NickName>
      </NickNameWrapper>
    </ContainerButton>
  );
}

export default React.memo(ListMessageButton);
