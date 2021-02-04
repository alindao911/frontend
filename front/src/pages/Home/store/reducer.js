import { SET_AUTH_FORM_OPENED } from "./action-types";

const initialState = {
  isAuthFormOpened: false,
};

const HomeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_FORM_OPENED: {
      return {
        ...state,
        isAuthFormOpened: payload,
      };
    }
    default:
      return state;
  }
};

export default HomeReducer;
