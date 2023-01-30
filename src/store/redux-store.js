import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next1) => (action1) => {
  if (!action1.type) {
    return next1(action1);
  }

  console.log("type: ", action1.type);
  console.log("payload: ", action1.payload);
  console.log("currentState: ", store.getState());

  next1(action1);

  console.log("next state: ", store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
