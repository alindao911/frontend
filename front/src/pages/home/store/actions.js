import {
  SET_INITIAL_AUTH_DATA,
  SET_AUTH_FORM_OPENED,
  SET_IS_LOGGED_IN,
  SET_REGISTERED_USER,
} from "./action-types";

export const setAuthFormOpen = (payload) => ({
  type: SET_AUTH_FORM_OPENED,
  payload,
});

export const setInitiaAuthData = (payload) => ({
  type: SET_INITIAL_AUTH_DATA,
  payload,
});

export const setIsLoggedIn = (payload) => ({
  type: SET_IS_LOGGED_IN,
  payload,
});

export const setRegisteredUser = (payload) => ({
  type: SET_REGISTERED_USER,
  payload,
});
