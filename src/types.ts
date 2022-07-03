export interface IPost {
  id: number;
  categoryId: number;
  userId: number;
  userNickname: string;
  title: string;
  visibility: boolean;
  date: string;
  createdAt: string;
  count: number;
  messages: IMessageArray;
}

type IMessageArray = Array<IMessage>;

export interface IMessage {
  nickname: string;
  msgId: number;
  iconId: number;
  x: number;
  y: number;
}
