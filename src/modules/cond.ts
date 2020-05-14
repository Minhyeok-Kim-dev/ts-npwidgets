import { createAction, createReducer, createAsyncAction } from "typesafe-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { getData } from "../api/api";

// 액션타입 선언
const RETRIVE = "cond/RETRIVE";
const SET_DATA = "cond/SET_DATA"; // TODO: Saga Success에서 처리가능하면 제거

export const retrive = createAction(RETRIVE)();
export const setData = createAction(SET_DATA)<string>();

type CondAction = 
  | ReturnType<typeof retrive>
  | ReturnType<typeof setData>;

// 관리 상태타입 선언
export type CondState = {
  data: string;
};

const initialState: CondState = {
  data: ""
};


// 리듀서 생성
const cond = createReducer<CondState, CondAction>(initialState)
  .handleAction(setData, (state, action) => ({
    ...state,
    data: action.payload
  }));

export default cond;


//##########################
// 비동기 액션타입 선언
const RETRIVE_ASYNC = "cond/RETRIVE_ASYNC";
const RETRIVE_ASYNC_SUCCESS = "cond/RETRIVE_ASYNC_SUCCESS";
const RETRIVE_ASYNC_ERROR = "cond/RETRIVE_ASYNC_ERROR";

export const getRetriveAsync = createAsyncAction(
  RETRIVE_ASYNC,
  RETRIVE_ASYNC_SUCCESS,
  RETRIVE_ASYNC_ERROR
)<undefined, string, string>();

function* retriveSaga() {
  try {
    const result = yield call(getData);
    // console.log(result);

    // yield put({
    //   type: RETRIVE_ASYNC_SUCCESS,
    //   payload: result,
    // });
    yield put(setData(result));
  } catch (e) {
    yield put({
      type: RETRIVE_ASYNC_ERROR,
      payload: e,
      error: true,
    });
  }
}

export function* condSaga() {
  yield takeEvery(RETRIVE_ASYNC, retriveSaga);
}