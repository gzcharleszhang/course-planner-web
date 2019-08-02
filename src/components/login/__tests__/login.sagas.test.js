import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../login.types";
import { recordSaga } from '../common';

describe('Login Saga', () => {
  loginUserService = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fail if no such user exists', async () => {

    const initialAction = { 
      type: LOGIN_USER, 
      user: {
        email: "KevinZhang@gmail.com",
        password: "Keith"
      }
    };
    const error = "Invalid Credentials";

    const dispatched = await recordSaga(
      loginUserService,
      initialAction
    );

    expect(dispatched).toContainEqual({ type: LOGIN_USER_ERROR, error });
  });

  // it('should get profile from API and call success action if authenticated', async () => {
  //   const someProfile = { name: 'Guy Incognito' };
  //   api.getProfile.mockImplementation(() => someProfile);
  //   selectors.isAuthenticated.mockImplementation(() => true);

  //   const initialAction = { profileId: 1 };
  //   const dispatched = await recordSaga(
  //     loadProfileSaga,
  //     initialAction
  //   );

  //   expect(api.getProfile).toHaveBeenCalledWith(1);
  //   expect(dispatched).toContainEqual(loadProfileSuccess(someProfile));
  // });
});
