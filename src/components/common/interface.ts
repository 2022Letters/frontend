export interface kakaoLogin {
  'access-token': string;
  existingUser: string;
  message: string;
  user: User;
}

export interface User {
  id: number;
  nickname: string;
  email: string;
}

export interface NicknameProps {
  email: string;
  socialLoginType: number;
  kakaoRefreshToken: string;
}
