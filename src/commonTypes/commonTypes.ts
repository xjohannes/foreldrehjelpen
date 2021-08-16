import { Dispatch } from 'react';

export type setNavStateFunction = () => boolean;

export type navStateType = {
  open: boolean;
  toggleNavState: setNavStateFunction;
};

export type User = {
  name?: string;
  picture?: string;
};

export interface GlobalStateInterface {
  isUserAuthenticated: boolean;
  loggedUser: User;
  navState: boolean;
}
export interface ActionType {
  type: string;
  payload?: any;
}
export interface UserActionType extends ActionType {
  payload: User;
}

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<UserActionType>;
};
