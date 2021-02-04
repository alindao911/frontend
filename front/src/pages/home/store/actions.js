import { SET_AUTH_FORM_OPENED } from "./action-types";

export const setAuthFormOpen = (payload) => ({
  type: SET_AUTH_FORM_OPENED,
  payload,
});