import { takeLatest, put, call } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./login.types";


export function* loginSaga(payload) {
    try {
        const response = yield call(loginUserService, payload);
        yield put({ type: LOGIN_USER_SUCCESS, response });
    } catch (error) {
        yield put({ type: LOGIN_USER_ERROR, error })
    }
}

export default function* watchUserLogin() {
    yield takeLatest(LOGIN_USER, loginSaga);
}