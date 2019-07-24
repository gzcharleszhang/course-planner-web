import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./login.types";
import { get } from 'lodash';

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_SUCCESS:
          return {...state, user: get(action.payload, undefined)}
      case LOGIN_USER_ERROR:
          return {...state, user: get(action.payload, undefined)}
      default:
        return state;
    }
};
