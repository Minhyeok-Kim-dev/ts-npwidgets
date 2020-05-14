import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import cond, { condSaga } from "./cond";

const rootReducer = combineReducers({
  cond
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([condSaga()]);
}