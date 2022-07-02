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

// 게시글 상세에 존재하는 메시지 정보
export interface IMessage {
  nickname: string;
  msgId: number;
  iconId: number;
  x: number;
  y: number;
}

// 메시지 생성시 인터페이스
export interface ICreateMessage {
  postId: number;
  iconId: number;
  nickname: string;
  content: string;
  x: number;
  y: number;
}
