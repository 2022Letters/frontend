import React, { createContext, useMemo, useState } from 'react';

export interface IMessageContext {
  messageInfo: IMessageLink;
  setCategoryId: (categoryId: number) => void;
  setMsgId: (msgId: number) => void;
  setToggle: (bool: boolean) => void;
}

export const MessageContext = createContext<IMessageContext | null>(null);

interface Props {
  children: React.ReactNode;
}

function MessageProvider({ children }: Props) {
  const [messageInfo, setMessageInfo] = useState<IMessageLink>({
    categoryId: null,
    msgId: null,
    toggle: false
  });

  const setCategoryId = (categoryId: number | null) => {
    setMessageInfo((prev) => ({ ...prev, categoryId }));
  };

  const setMsgId = (msgId: number | null) => {
    setMessageInfo((prev) => ({ ...prev, msgId }));
  };

  const setToggle = (bool: boolean) => {
    setMessageInfo((prev) => ({ ...prev, toggle: bool }));
  };

  const messageSet = useMemo(
    () => ({ messageInfo, setCategoryId, setMsgId, setToggle }),
    [messageInfo]
  );

  return (
    <MessageContext.Provider value={messageSet}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageProvider;
