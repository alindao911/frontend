import { SET_INITIAL_NEWS_DATA } from "./action-types";

const initialState = {
  news: [],
};

const HomeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INITIAL_NEWS_DATA:
      return {
        ...state,
        news: payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
