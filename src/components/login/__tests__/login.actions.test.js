import loginUser from '../login.actions'
import { LOGIN_USER } from '../login.types'

describe('Login Actions', () => {
  it('should create an action to login a user', () => {
    const user = {
      email: "KevinZhang@gmail.com",
      password: "Keith"
    };
    const expectedAction = {
      type: LOGIN_USER,
      user
    };
    expect(loginUser(user)).toEqual(expectedAction);
  });
});