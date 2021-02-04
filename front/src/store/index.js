import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";

const middlewares = [];
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

if (process.env.MODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
