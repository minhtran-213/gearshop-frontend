import { Col, Modal, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {
  addNewProduct,
  updateProduct,
} from '../../redux/actions/ProductsAction';

import axios from 'axios';
import { useDispatch } from 'react-redux';

const ProductUpdate = ({ show, onHide, productId }) => {
  const dispatch = useDispatch();
  const [manufacturer, setManufacturer] = useState([]);
  const [category, setCategory] = useState([]);
  const [productRequest, setProductRequest] = useState({
    id: productId,
    name: '',
    description: '',
    manufacturerId: 0,
    categoryId: 0,
  });
  useEffect(async () => {
    const manuRes = await axios.get('/manufacturers');
    const catRes = await axios.get('/admin/basicCategories');
    const prodRes = await axios.get(`/admin/product/${productId}`);
    console.log('productId', productId);

    const { object } = prodRes.data;
    setManufacturer(manuRes.data.object);
    setCategory(catRes.data.object);
    setProductRequest({
      ...productRequest,
      ...{
        name: object.name,
        description: object.description,
        manufacturerId: object.manufacturerId,
        categoryId: object.categoryId,
      },
    });
  }, [productId]);
  const handleManuChange = (event) => {
    setProductRequest({
      ...productRequest,
      ...{ manufacturerId: event.target.value },
    });
  };

  const handleCateChange = (event) => {
    setProductRequest({
      ...productRequest,
      ...{ categoryId: event.target.value },
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    dispatch(updateProduct(productRequest));
  };
  return (
    <form id='updateProduct' onSubmit={submitForm}>
      <input type='hidden' value={productId} />
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <label htmlFor='Name'>Name</label>
              <input
                className='form-control'
                type='text'
                value={productRequest.name}
                onChange={(event) =>
                  setProductRequest({
                    ...productRequest,
                    ...{ name: event.target.value },
                  })
                }
              />
            </Col>
            <Col>
              <label htmlFor='manufacturer'>Manufacturer</label>
              <select
                className='form-select'
                id='manufacturer'
                value={productRequest.manufacturerId}
                onChange={handleManuChange}>
                {manufacturer.map((manufacturerDetail) => (
                  <option
                    key={manufacturerDetail.id}
                    value={manufacturerDetail.id}>
                    {manufacturerDetail.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor='category'>Category</label>
              <select
                className='form-select'
                id='category'
                value={productRequest.categoryId}
                onChange={handleCateChange}>
                {category.map((categoryDetail) => (
                  <option key={categoryDetail.id} value={categoryDetail.id}>
                    {categoryDetail.name}
                  </option>
                ))}
              </select>
            </Col>
            <Col>
              <label htmlFor='description'>Description</label>
              <textarea
                className='form-control'
                value={productRequest.description}
                onChange={(event) =>
                  setProductRequest({
                    ...productRequest,
                    ...{ description: event.target.value },
                  })
                }
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={onHide} className='btn btn-secondary'>
            Close
          </button>
          <button
            onClick={() => window.location.reload()}
            className='btn btn-primary'
            form='updateProduct'
            type='submit'>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default ProductUpdate;
