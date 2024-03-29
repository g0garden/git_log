import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Post from "./modules/post";
import Image from "./modules/image";
//import Setting from './modules/setting';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  post: Post,
  image: Image,
  //setting: Setting,
  // comment: comment,
  router: connectRouter(history),
});

// history-thunk 연결
const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
   const { logger } = require("redux-logger"); // if문 안에서만 쓰려고
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
