import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "../reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
export default createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga)

