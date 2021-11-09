import {
  ProductDetailActionType,
  ProductsActionType,
  ProductsAdminActionType,
} from './ActionTypes';

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

const getAllProductAdmin = (page) => async (dispatch) => {
  try {
    dispatch({ type: ProductsAdminActionType.GET_PRODUCT_ADMIN_REQUEST });
    const response = await axios.get(`/admin/products?page=${page}`);
    const { object } = response.data;
    dispatch({
      type: ProductsAdminActionType.GET_PRODUCT_ADMIN_SUCCESS,
      payload: object,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProductDetailAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: ProductsAdminActionType.GET_PRODUCT_DETAILS_REQUEST });
    const response = await axios.get(`/admin/productDetails?productId=${id}`);
    const { object } = response.data;
    dispatch({
      type: ProductsAdminActionType.GET_PRODUCT_DETAILS_SUCCESS_SUCCESS,
      payload: object,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = (product) => async (dispatch) => {
  console.log(product);
  try {
    const response = await axios.put(`/admin/product/${product.id}`, product);
    console.log(response);
    dispatch({
      type: ProductsAdminActionType.UPDATE_PRODUCT,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};
const addNewProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post(`/admin/product`, product);
    dispatch({
      type: ProductsAdminActionType.ADD_PRODUCT,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/admin/product/${id}`);
    dispatch({
      type: ProductsAdminActionType.DELETE_PRODUCT,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProductDetail = (productDetail) => async (dispatch) => {
  try {
    const response = await axios.put(
      `/admin/productDetail/${productDetail.id}`,
      productDetail
    );
    console.log(response);
    dispatch({
      type: ProductsAdminActionType.UPDATE_PRODUCT_DETAIL,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};
const addNewProductDetail = (productDetail) => async (dispatch) => {
  try {
    const response = await axios.post(`/admin/productDetail`, productDetail);
    dispatch({
      type: ProductsAdminActionType.ADD_PRODUCT_DETAIL,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProductDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/admin/productDetail/${id}`);
    dispatch({
      type: ProductsAdminActionType.DELETE_PRODUCT_DETAIL,
      payload: response.data.successCode,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  getProducts,
  getProductDetail,
  getAllProductAdmin,
  getProductDetailAdmin,
  addNewProduct,
  updateProduct,
  deleteProduct,
  addNewProductDetail,
  updateProductDetail,
  deleteProductDetail,
};
