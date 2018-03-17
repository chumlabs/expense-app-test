import authReducer from '../../reducers/authReducer';

test('should set uid from login obj', () => {
  const uid = 'CIU98349dgjoe0dFSNof';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

test('should logoff from logout obj', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'CIU98349dgjoe0dFSNof' }, action);
  expect(state).toEqual({});
});
