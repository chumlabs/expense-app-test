import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, startLogin, logout, startLogout } from '../../actions/authActions';

// SETUP
const createMockStore = configureMockStore([thunk]);

// TESTS
test('should return an action object from login', () => {
  const uid = 'CIU98349dgjoe0dFSNof';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should return an action object from logoff', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
