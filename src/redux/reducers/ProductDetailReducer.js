import { ProductDetailActionType } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  product: {},
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductDetailActionType.GET_PRODUCT_DETAIL_REQUEST:
      return { ...state, ...{ loading: true } };
    case ProductDetailActionType.GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, ...{ loading: false, product: action.payload } };
    case ProductDetailActionType.GET_PRODUCT_DETAIL_FAIL:
      return { ...state, ...{ error: action.payload } };
    default:
      return state;
  }
};

export default productDetailReducer;
