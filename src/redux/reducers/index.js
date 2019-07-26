import { combineReducers } from "redux";
import loginUser from '../../components/login/login.reducers'
import { routerReducer } from 'react-router-redux';

export default combineReducers({ loginUser, router: routerReducer });