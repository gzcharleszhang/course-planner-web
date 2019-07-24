import { LOGIN_USER } from "./login.types";
import { get } from 'lodash';

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {...state, user: get(action.payload, undefined)}
      default:
        return state;
    }
}