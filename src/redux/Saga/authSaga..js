import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from "../ActionTypes"
import { forgotAPI, loginAPI, signupAPI } from '../../common/apis/auth.api'
import { setAlert } from '../slice/alertSlice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        console.log(user);
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (e) {
        console.log(e);
        yield put(setAlert({ text: e.message, color: 'error' }))
    }
}

function* loginUser(action) {
    try {
        const user = yield call(loginAPI, action.payload)
        console.log(user);
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (e) {
        console.log(e);
        yield put(setAlert({ text: e.message, color: 'error' }))
    }
}

function* forgotUser(action) {
    try {
        const user = yield call(forgotAPI, action.payload)
        console.log(user);
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (e) {
        console.log(e);
        yield put(setAlert({ text: e.message, color: 'error' }))
    }
}

function* signupSaga() {
    yield takeEvery(ActionType.SIGNUP_REQUEST, signupUser)
}

function* loginSaga() {
    yield takeEvery(ActionType.LOGIN_REQUEST, loginUser)
}

function* forgotSaga() {
    yield takeEvery(ActionType.FORGOT_REQUEST, forgotUser)
}

export function* authSaga() {
    yield all([
        signupSaga(),
        loginSaga(),
        forgotSaga()
    ])
}