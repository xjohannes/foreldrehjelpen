import { Dispatch } from 'react';
import { OpUnitType } from 'dayjs';

export type setNavStateFunction = () => boolean;

export type navStateType = {
  open: boolean;
  toggleNavState: setNavStateFunction;
};

export type User = {
  name?: string;
  picture?: string;
  email?: string;
  phone?: string;
};

export interface Team {
  leader: User;
  members: User[];
}

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

interface duration {
  timeUnits: OpUnitType;
  value: number;
}

interface Message {
  id: string;
  sender: string;
  message: string;
}

export interface EventType {
  id: string;
  name: string;
  startTime: string;
  place: string;
  users: Array<string>;
  messages: Array<Message>;
  duration: duration;
  assignment: string;
}
