import React from 'react';
import styled from 'styled-components';
import { leaves } from '../../constants';
import LetterModal from './LetterModal';

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
}

function ListMessageButton({ message, categoryId }: IListMessageButtonProps) {
  return (
    <ContainerButton type="button">
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

export default ListMessageButton;
