import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  width: 100%;
  position: relative;
  background-color: #fff9c1;
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
  font-size: 8px;
`;
const ImgWrapper = styled.picture`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

const CategoryWrapper = styled.div`
  background-color: #ffcaca;
  border-radius: 50px;
  width: fit-content;
  padding: 0.375rem 1.625rem;
  position: absolute;
  bottom: 5px;
  right: 0;
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

const MenuWrapper = styled.div`
  position: absolute;
  background-color: #9f9f9f;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 40px;
  padding: inherit;
  border-radius: 10px;
  z-index: 2;
`;

const MenuButton = styled.button<UpdateButton>`
  padding: 0.375rem 1.5rem;
  background-color: inherit;
  border: none;
  border-bottom: ${(props) => props.update && '1px solid #323232'};
  border-radius: ${(props) =>
    props.update ? '10px 10px 0 0' : '0 0 10px 10px'};
  &:hover {
    background-color: #9f9f9f;
  }
  transition: all 0.2s ease-in;
`;

interface UpdateButton {
  update?: string;
}

interface IEventCard {
  eventInfo: IEventInfo;
  menu: IMenu;
  idx: number;
}
export default function EventCard({ eventInfo, menu, idx }: IEventCard) {
  const { category, bouquet, title, id, date } = eventInfo;
  const { currentTargetEvent, toggleMenu } = menu;
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    toggleMenu(event);
  };

  const KeepMenuOn = (event: React.MouseEvent<HTMLButtonElement>) => {
    toggleMenu(event);
  };
  return (
    <Container>
      <EventCardTopWrapper>
        <ImgWrapper>
          <Img src={bouquet} alt={`${title} banner`} />
        </ImgWrapper>
        <CategoryWrapper>
          <p>{category}</p>
        </CategoryWrapper>
      </EventCardTopWrapper>
      <EventCardBottomWrapper>
        <p>{date}</p>
        <h1>{title}</h1>
        <MenuToggleButton type="button" onClick={onClick} data-id={idx}>
          . . .
        </MenuToggleButton>
        {currentTargetEvent === idx && (
          <MenuWrapper className="target">
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
