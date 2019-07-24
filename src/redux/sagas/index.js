import { fork } from 'redux-saga/effects';
import watchUserLogin from '../../components/login/login.sagas';

export default function* rootSaga () {
  yield fork(watchUserLogin);
}