import { combineReducers } from "redux";

import homeReducer from "../pages/home/store/reducer";
import newsReducer from "../pages/news/store/reducer";

export default combineReducers({
  home: homeReducer,
  news: newsReducer,
});
