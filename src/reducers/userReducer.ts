import {
  UserActionType,
  GlobalStateInterface
} from '../commonTypes/commonTypes';

export const toggleNavState = (newState: boolean): boolean => newState;

const initialState = {
  loggedUser: {
    name: '',
    picture: ''
  },
  isUserAuthenticated: false,
  navState: false
};

const userReducer = (
  state: GlobalStateInterface = initialState,
  action: UserActionType
): GlobalStateInterface => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        loggedUser: action.payload
      };
    case 'GET_USER':
      return {
        ...state,
        loggedUser: action.payload
      };
    default:
      return state;
  }
};
export default userReducer;
