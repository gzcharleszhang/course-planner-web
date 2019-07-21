import { combineReducers } from "redux";
import auth from '../login/login.reducers'
import { routerReducer } from 'react-router-redux';

export default combineReducers({ auth, router: routerReducer });