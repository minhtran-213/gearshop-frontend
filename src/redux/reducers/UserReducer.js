import { UserAdminType } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserAdminType.GET_USERS_REQUEST:
      return { ...state, ...{ loading: true } };
    case UserAdminType.GET_USERS_SUCCESS:
      return { ...state, ...{ loading: false, users: action.payload } };
    case UserAdminType.GET_USERS_FAIL:
      return {
        ...state,
        ...{ error: action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
