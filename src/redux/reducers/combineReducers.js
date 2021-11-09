import addressReducer from './AddressAdminReduce';
import authReducer from './AuthReducer';
import categoryReducer from './CategoryReducer';
import categoryUserReducer from './CategoryUserReducer';
import { combineReducers } from 'redux';
import manufacturerReducer from './ManufacturerReducer';
import productAdminReducer from './ProductAdminReducer';
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
  productAdmin: productAdminReducer,
  categoriesUser: categoryUserReducer,
});

export default reducers;
