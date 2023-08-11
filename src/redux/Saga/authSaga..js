import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from "../ActionTypes"
import { forgotAPI, loginAPI, logoutAPI, signupAPI } from '../../common/apis/auth.api'
import { setAlert } from '../slice/alertSlice';
import { authError, emailVerification, loggedIn, logoutrequest } from '../action/auth.action';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        yield put(emailVerification())
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
    }
}

function* loginUser(action) {
    try {
        const user = yield call(loginAPI, action.payload)
        yield put(loggedIn(user.user))
        yield put(setAlert({ text: user.message, color: 'success' }))
        console.log(user);
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
    }
}

function* forgotUser(action) {
    try {
        const user = yield call(forgotAPI, action.payload)
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
    }
}

function* logoutUser(action) {
    try {
        const user = yield call(logoutAPI,action.payload)
        yield put(logoutrequest())
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (e) {
        yield put(authError(e.message))
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

function* logoutSaga() {
    yield takeEvery(ActionType.LOGG_OUT, logoutUser)
}

export function* authSaga() {
    yield all([
        signupSaga(),
        loginSaga(),
        forgotSaga(),
        logoutSaga()
    ])
}