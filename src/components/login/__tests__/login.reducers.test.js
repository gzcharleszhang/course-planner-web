import loginReducer from '../login.reducers'
import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from '../login.types';

describe('Login Reducer', () => {
    
    it('should return the initial state', () => (
        expect(loginReducer(undefined, {})).toEqual({
            email: "",
            password: ""
        })
    ));

    it('should handle LOGIN_USER_SUCCESS', () => {
        const response = {
            email: "test@gmail.com",
            password: "keith"
        };
        expect(loginReducer({}, { type: LOGIN_USER_SUCCESS, response })).toEqual({ response });
    });

    it('should handle LOGIN_USER_ERROR', () => {
        const error = { message: "Invalid credentials" };
        expect(loginReducer({}, { type: LOGIN_USER_ERROR, error })).toEqual({ error });
    })
});
