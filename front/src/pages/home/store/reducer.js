import {
  SET_INITIAL_AUTH_DATA,
  SET_AUTH_FORM_OPENED,
  SET_IS_LOGGED_IN,
  SET_REGISTERED_USER,
} from "./action-types";

const initialState = {
  isAuthFormOpened: false,
  isLoggedIn: false,
  auth: [],
};

const HomeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_FORM_OPENED:
      return {
        ...state,
        isAuthFormOpened: payload,
      };
    case SET_INITIAL_AUTH_DATA:
      return {
        ...state,
        auth: payload,
      };
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload,
      };
    case SET_REGISTERED_USER: {
      return {
        ...state,
        auth: [...state.auth, payload],
      };
    }
    default:
      return state;
  }
};

export default HomeReducer;
