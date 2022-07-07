import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { bouquetList, categoryList } from '../constants';

const boxFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.article`
  width: 100%;
  position: relative;
  background-color: transparent;
  border-radius: 10px;
  transition: all 0.3s ease-in;
`;

const EventCardTopWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`;

const EventCardBottomWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 0.625rem;
  background-color: #efefef;
  border-radius: 10px;
  font-size: 1.5rem;
  letter-spacing: 2px;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;
const ImgWrapper = styled.picture`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const CategoryWrapper = styled.div`
  background-color: lavender;
  border-radius: 50px;
  width: fit-content;
  padding: 0.375rem 1rem;
  position: absolute;
  bottom: 5px;
  right: 0;
  letter-spacing: 5px;
  font-size: 1.5rem;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const MenuToggleButton = styled.button`
  border: none;
  position: absolute;
  &:hover &:active &:visited &:focus &:focus-within &:focus-visible {
    background-color: #efefef;
  }

  bottom: 0;
  right: 0;
  padding: inherit;
  font-weight: bold;
  border-radius: 10px;
  background-color: #efefef;
  vertical-align: text-bottom;
`;

const MenuWrapper = styled.div<IMenuButton>`
  position: absolute;
  background-color: #9f9f9f;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 40px;
  padding: 0 10px;
  border-radius: 10px;
  z-index: 2;
  ${(props) =>
    props.active &&
    css`
      animation: ${boxFadeIn} 0.2s 0s linear alternate;
    `}
`;

const MenuButton = styled.button<UpdateButton>`
  padding: 0.375rem 1.5rem;
  background-color: inherit;
  border: none;
  border-bottom: ${(props) => props.update && '1px solid #323232'};
  border-radius: ${(props) =>
    props.update ? '10px 10px 0 0' : '0 0 10px 10px'};
  transition: all 0.5s ease-in;
  font-size: 1.5rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

interface IMenuButton {
  active?: boolean;
}

interface UpdateButton {
  update?: string;
}

interface IEventCard {
  eventInfo: IEventInfo;
  menu: IMenu;
  idx: number;
}
export default function EventCard({ eventInfo, menu, idx }: IEventCard) {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const { categoryId, userNickname, title, id, date } = eventInfo;
  const { currentTargetEvent, toggleMenu } = menu;
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsMenuOn(true);
    toggleMenu(event);
  };

  const KeepMenuOn = (event: React.MouseEvent<HTMLButtonElement>) => {
    toggleMenu(event);
  };
  return (
    <Container>
      <Link to={`/${id}`}>
        <EventCardTopWrapper>
          <ImgWrapper>
            <Img
              src={bouquetList[categoryId]}
              alt={`${title} banner`}
              draggable={false}
            />
          </ImgWrapper>
          <CategoryWrapper>
            <p>{categoryList[categoryId - 1].categoryName}</p>
          </CategoryWrapper>
        </EventCardTopWrapper>
      </Link>
      <EventCardBottomWrapper>
        <p>{date}</p>
        <h1>{title}</h1>
        <MenuToggleButton type="button" onClick={onClick} data-id={idx}>
          . . .
        </MenuToggleButton>
        {currentTargetEvent === idx && (
          <MenuWrapper className="target" active={isMenuOn}>
            <MenuButton
              type="button"
              update="update"
              onClick={KeepMenuOn}
              data-menu="update"
            >
              수정
            </MenuButton>
            <MenuButton type="button" data-menu="delete" onClick={KeepMenuOn}>
              삭제
            </MenuButton>
          </MenuWrapper>
        )}
      </EventCardBottomWrapper>
    </Container>
  );
}
