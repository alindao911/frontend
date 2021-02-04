import { combineReducers } from "redux";

import homeReducer from "../pages/home/store/reducer";

export default combineReducers({
  home: homeReducer,
});
