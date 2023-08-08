import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from "../ActionTypes"
import { signupAPI } from '../../common/apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* authUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* signupSaga() {
    yield takeEvery(ActionType.SIGNUP_REQUEST, authUser)
}

export function* authSaga() {
    yield all ([
        signupSaga()
    ])
}