import { SET_INITIAL_AUTH_DATA, SET_AUTH_FORM_OPENED } from "./action-types";

const initialState = {
  isAuthFormOpened: false,
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
    default:
      return state;
  }
};

export default HomeReducer;
