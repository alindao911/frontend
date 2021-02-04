import { SET_INITIAL_AUTH_DATA, SET_AUTH_FORM_OPENED } from "./action-types";

export const setAuthFormOpen = (payload) => ({
  type: SET_AUTH_FORM_OPENED,
  payload,
});

export const setInitiaAuthData = (payload) => ({
  type: SET_INITIAL_AUTH_DATA,
  payload,
});
