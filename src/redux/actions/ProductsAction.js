import { ProductDetailActionType, ProductsActionType } from './ActionTypes';

import axios from 'axios';

const getProducts = (currentPage) => async (dispatch) => {
  try {
    dispatch({ type: ProductsActionType.GET_PRODUCT_REQUEST });

    const response = await axios.get(`/products?offset=${currentPage}`);
    const { data } = response.data;
    const payload = {
      products: data.content,
      totalPage: data.totalPages,
      activePage: data.pageable.pageNumber,
    };
    // console.log(response);
    // console.log(payload);
    dispatch({
      type: ProductsActionType.GET_PRODUCT_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: ProductsActionType.GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: ProductDetailActionType.GET_PRODUCT_DETAIL_REQUEST });

    const response = await axios.get(`/products/${id}`);
    const { data } = response.data;
    console.log(response);
    dispatch({
      type: ProductDetailActionType.GET_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductDetailActionType.GET_PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { getProducts, getProductDetail };
