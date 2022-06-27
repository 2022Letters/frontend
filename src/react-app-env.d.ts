/// <reference types="react-scripts" />

interface IEventInfo {
  category: string;
  bouquet: string;
  date: string;
  title: string;
  id: number;
}

interface IEventInfoProps {
  eventInfo: IEventInfo;
}

interface IMenu {
  isMenuOn: boolean;
  setIsMenuOn: object;
}

interface IMenuProps {
  menu: IMenu;
}
