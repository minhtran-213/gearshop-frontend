import { UserAdminType } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  users: [],
  userCurrentPage: 0,
  userTotalPages: 0,
  userTotalElements: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserAdminType.GET_USERS_REQUEST:
      return { ...state, ...{ loading: true } };
    case UserAdminType.GET_USERS_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          users: action.payload.content,
          userCurrentPage: action.payload.currentPage,
          userTotalPages: action.payload.totalPages,
          userTotalElements: action.payload.totalElements,
        },
      };
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
