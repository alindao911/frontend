import {
  SET_INITIAL_NEWS_DATA,
  SAVE_NEW_NEWS,
  SAVE_UPDATED_NEWS,
  SAVE_NEW_COMMENT,
} from "./action-types";

export const setInitialNewsData = (payload) => ({
  type: SET_INITIAL_NEWS_DATA,
  payload,
});

export const saveNewNews = (payload) => ({
  type: SAVE_NEW_NEWS,
  payload,
});

export const saveUpdatedNews = (payload) => ({
  type: SAVE_UPDATED_NEWS,
  payload,
});

export const saveNewComment = (payload) => ({
  type: SAVE_NEW_COMMENT,
  payload,
});
