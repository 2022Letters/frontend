/// <reference types="react-scripts" />

interface IEventInfo {
  userNickname: string;
  categoryId: number;
  date: string;
  title: string;
  id: number;
}
interface IMenu {
  currentTargetEvent: number;
  toggleMenu(event: React.MouseEvent<HTMLButtonElement>): void;
}

interface ICategory {
  categoryId?: any;
  categoryName: string;
}
interface ICategoryButton {
  index: number | null;
  currentCategory: ICategory;
}

interface IMessage {
  msgId: number;
  iconId: number;
  nickname: string;
  content: string;
  x: number;
  y: number;
}

interface IMessageLink {
  categoryId: number | null;
  msgId: number | null;
  toggle: boolean;
}

interface IMessageDetail {
  msgId: number | null;
  postId: number | null;
  iconId: number | null;
  nickname: string | null;
  content: string | null;
  x: number | null;
  y: number | null;
  createdAt: date | null;
}
