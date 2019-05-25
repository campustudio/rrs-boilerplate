import { updateState } from '@libs';

const initialState = {
  users: null,
};

export default function handleUserInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return updateState(state, action, 'users');
    default:
      return state;
  }
}
