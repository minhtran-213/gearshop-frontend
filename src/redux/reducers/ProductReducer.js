import {
  ProductsActionType,
  ProductsAdminActionType,
} from '../actions/ActionTypes';

const initialState = {
  loading: false,
  products: [],
  totalPage: 0,
  activePage: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionType.GET_PRODUCT_REQUEST:
      return { ...state, ...{ loading: true } };
    case ProductsActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          products: action.payload.products,
          totalPage: action.payload.totalPage,
          activePage: action.payload.activePage,
        },
      };
    case ProductsActionType.GET_PRODUCT_FAIL:
      return {
        ...state,
        ...{ error: action.payload },
      };

    default:
      return state;
  }
};

export default productReducer;
