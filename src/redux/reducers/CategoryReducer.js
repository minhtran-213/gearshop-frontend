import { CategoryAdminType } from '../actions/ActionTypes';

const initState = {
  categoryAdminLoading: false,
  categories: [],
  categoryCurrentPage: 0,
  categoryTotalPages: 0,
  categoryTotalElements: 0,
  message: '',
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CategoryAdminType.GET_CATEGORY_REQUEST:
      return { ...state, ...{ categoryAdminLoading: true } };
    case CategoryAdminType.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        ...{
          categoryAdminLoading: false,
          categories: action.payload.content,
          categoryCurrentPage: action.payload.currentPage,
          categoryTotalPages: action.payload.totalPages,
          categoryTotalElements: action.payload.totalElements,
        },
      };
    case CategoryAdminType.GET_CATEGORY_FAIL:
      return state;
    case CategoryAdminType.UPDATE_CATEGORY:
      return { ...state, ...{ message: action.payload } };
    case CategoryAdminType.ADD_CATEGORY:
      return { ...state, ...{ message: action.payload } };
    default:
      return state;
  }
};

export default categoryReducer;
