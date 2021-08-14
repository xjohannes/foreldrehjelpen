import React, {
  createContext,
  ReactElement,
  ReactNode,
  useReducer
} from 'react';
import Reducer from '../reducers';
import { ContextType, GlobalStateInterface } from '../commonTypes/commonTypes';

const initialState: GlobalStateInterface = {
  isUserAuthenticated: false,
  loggedUser: {
    name: '',
    picture: ''
  },
  navState: false
};

export const globalContext = createContext({} as ContextType);

export function GlobalStore({
  children
}: {
  children: ReactNode;
}): ReactElement {
  const { userReducer } = Reducer;
  const [globalState, dispatch] = useReducer(userReducer, initialState);
  return (
    <>
      <globalContext.Provider value={{ globalState, dispatch }}>
        {' '}
        {children}
      </globalContext.Provider>
    </>
  );
}

export default GlobalStore;
