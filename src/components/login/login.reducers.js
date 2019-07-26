import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./login.types";
import get from 'lodash/get';

const initialState = {
    email: "",
    password: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return { ...state, response: get(action, 'response', null) }
        case LOGIN_USER_ERROR:
            return { ...state, error: get(action, 'error', null) }
        default:
            return state;
    }
};
