import { SET_INITIAL_DATA, SET_AUTH_FORM_OPENED } from "./action-types";

const initialState = {
  isAuthFormOpened: false,
  news: [],
  auth: [],
};

const HomeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_FORM_OPENED:
      return {
        ...state,
        isAuthFormOpened: payload,
      };
    case SET_INITIAL_DATA:
      return {
        ...state,
        news: payload.news,
        auth: payload.auth,
      };
    default:
      return state;
  }
};

export default HomeReducer;
