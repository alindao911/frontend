import {
  SAVE_NEW_NEWS,
  SAVE_UPDATED_NEWS,
  SAVE_NEW_COMMENT,
  SET_INITIAL_NEWS_DATA,
} from "./action-types";

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
    case SAVE_NEW_NEWS:
      return {
        ...state,
        news: [...state.news, payload],
      };
    case SAVE_UPDATED_NEWS:
      return saveUpdatedNews(state, payload);
    case SAVE_NEW_COMMENT:
      return saveNewComment(state, payload);
    default:
      return state;
  }
};

function saveUpdatedNews(state, payload) {
  let newsIndex = state.news.findIndex((item) => item.id === payload.id);
  state.news[newsIndex] = payload;

  return state;
}

function saveNewComment(state, payload) {
  let newsIndex = state.news.findIndex((item) => item.id === payload.id);
  state.news[newsIndex].comments.push(payload);

  return state;
}

export default HomeReducer;
