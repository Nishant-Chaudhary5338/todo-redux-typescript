/** @format */

import { createStore, Reducer } from "redux";
import { FAILED_INCREASED, PASS_INCREASED } from "./actions";

type state = {
  passed: number;
  failed: number;
};

const initialState = { passed: 0, failed: 0 };

const reducer: Reducer<state> = (
  currentState = initialState,
  dispatchedAction
) => {
  console.log("state", currentState, "action", dispatchedAction);
  switch (dispatchedAction.type) {
    case PASS_INCREASED: {
      return { ...currentState, passed: currentState.passed + 1 };
    }
    case FAILED_INCREASED: {
      return { ...currentState, failed: currentState.failed + 1 };
    }
    default: {
      return currentState;
    }
  }
};

const store = createStore(reducer);
export default store;
