import { ProductsActionType } from '../actions/ActionTypes';

const initialState = {
  productLoading: false,
  products: [],
  productDetail: {},
  totalPages: 0,
  currentPage: 0,
  error: '',
  message: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionType.GET_PRODUCT_REQUEST:
      return { ...state, ...{ productLoading: true } };
    case ProductsActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        ...{
          productLoading: false,
          products: action.payload.content,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        },
      };
    case ProductsActionType.GET_PRODUCT_FAIL:
      return {
        ...state,
        ...{ error: action.payload },
      };
    case ProductsActionType.GET_PRODUCT_CATEGORY_REQUEST:
      return { ...state, ...{ productLoading: true } };
    case ProductsActionType.GET_PRODUCT_CATEGORY_SUCCESS:
      return {
        ...state,
        ...{
          productLoading: false,
          products: action.payload.content,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        },
      };
    case ProductsActionType.GET_PRODUCT_CATEGORY_FAIL:
      return state;
    default:
      return state;
  }
};

export default productReducer;
