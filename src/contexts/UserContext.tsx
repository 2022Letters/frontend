import { createContext, Dispatch, useContext, useReducer } from 'react';
import { User } from '../components/common/interface';

type UserState = User;

const initailState: User = {
  id: 0,
  email: '',
  nickname: ''
};

const UserStateContext = createContext<User | undefined>(undefined);

type Action = { type: 'CREATE'; user: User } | { type: 'REMOVE' };

type UserDispatch = Dispatch<Action>;
const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

function userReducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        id: action.user.id,
        email: action.user.email,
        nickname: action.user.nickname
      };
    case 'REMOVE':
      return {
        ...state,
        ...initailState
      };
    default:
      throw new Error('Unhandled action');
  }
}
export function UserContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, dispatch] = useReducer(userReducer, initailState);
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={user}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
}

export function useUserState() {
  const state = useContext(UserStateContext);
  if (!state) throw new Error('UserProvider not found');
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error('UserProvider not found');
  return dispatch;
}
