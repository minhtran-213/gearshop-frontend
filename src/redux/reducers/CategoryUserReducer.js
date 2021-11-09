import { CategoryAdminType, CategoryType } from '../actions/ActionTypes';

const initState = {
  categoryUserLoading: false,
  categories: [],
  message: '',
};

const categoryUserReducer = (state = initState, action) => {
  switch (action.type) {
    case CategoryType.GET_CATEGORY_USER_REQUEST:
      return { ...state, ...{ categoryUserLoading: true } };
    case CategoryType.GET_CATEGORY_USER_SUCCESS:
      return {
        ...state,
        ...{
          categoryUserLoading: false,
          categories: action.payload,
        },
      };
    case CategoryType.GET_CATEGORY_USER_FAIL:
      return state;
    default:
      return state;
  }
};

export default categoryUserReducer;
