export interface kakaoLogin {
  'access-token': string;
  existingUser: string;
  message: string;
  user: {
    id: number;
    nickname: string;
    email: string;
  };
}
