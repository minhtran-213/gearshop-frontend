import authReducer from './AuthReducer';
import { combineReducers } from 'redux';
import productDetailReducer from './ProductDetailReducer';
import productReducer from './ProductReducer';

const reducers = combineReducers({
  auth: authReducer,
  products: productReducer,
  productDetail: productDetailReducer,
});

export default reducers;
