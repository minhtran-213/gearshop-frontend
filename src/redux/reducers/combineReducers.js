import addressReducer from './AddressAdminReduce';
import authReducer from './AuthReducer';
import categoryReducer from './CategoryReducer';
import { combineReducers } from 'redux';
import manufacturerReducer from './ManufacturerReducer';
import productDetailReducer from './ProductDetailReducer';
import productReducer from './ProductReducer';
import userReducer from './UserReducer';

const reducers = combineReducers({
  auth: authReducer,
  products: productReducer,
  productDetail: productDetailReducer,
  user: userReducer,
  manufacturer: manufacturerReducer,
  addressAdmin: addressReducer,
  categoryAdmin: categoryReducer,
});

export default reducers;
