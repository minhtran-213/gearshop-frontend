import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import { IoIosArrowRoundBack } from 'react-icons/io';
import Paging from './Paging';
import axios from 'axios';
import moment from 'moment';
import { useDispatch } from 'react-redux';

const TableProductDetail = ({ productId, productToggler }) => {
  const [productDetails, setProductDetail] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      `/admin/productDetails?productId=${productId}`
    );
    setProductDetail(response.data.object);
  }, []);
  return (
    <>
      <Container>
        <p>
          <IoIosArrowRoundBack
            style={{ cursor: 'pointer' }}
            size='2rem'
            onClick={productToggler}
          />
          <strong>Back to user list</strong>
        </p>
        {productDetails.length > 0 ? (
          <Row>
            <Col sm={10}>
              <Table responsive='sm' variant='dark'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {productDetails.map((productDetail) => (
                    <tr key={productDetail.id}>
                      <th>{productDetail.id}</th>
                      <th>{productDetail.color}</th>
                      <th>{productDetail.price}</th>
                      <th>{productDetail.size}</th>
                      <th>{productDetail.quantity}</th>
                      <th>
                        <button className='btn btn-primary'>Update</button>
                      </th>
                      <th>
                        <button className='btn btn-danger'>Delete</button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col>
              <div className='d-flex justify-content-center'>
                <button className='btn btn-success'>Add new</button>
              </div>
            </Col>
          </Row>
        ) : (
          <h1>Empty</h1>
        )}
      </Container>
    </>
  );
};

export default TableProductDetail;
