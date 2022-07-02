import styled from 'styled-components';

export const Button = styled.button`
  height: 2.5rem;
  width: 100%;
  border: none;
  border-radius: 12px;
  margin-bottom: 45px;
  font-size: 1.5rem;
  background-color: #ffe5e2;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

// 소셜 로그인 컴포넌트

export const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const SocialBtn = styled.button`
  display: flex;
  align-items: center;
  width: 70vw;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.color || 'white'};
  padding: 4px 8px;
  box-shadow: 5px 8px 8px -2px grey;
`;

export const SocialImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const SocialSpan = styled.span`
  width: 100%;
  font-size: 20px;
`;
