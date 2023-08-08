import { all } from "redux-saga/effects";
import { authSaga } from "./auth.Saga.";

export function* rootSaga() {
    yield all ([
        authSaga()
    ])
}