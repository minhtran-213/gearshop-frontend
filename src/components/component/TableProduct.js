import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from 'react';

import Paging from './Paging';
import ProductAdd from './ProductAdd';
import TableProductDetail from './TableProductDetail';
import moment from 'moment';

const TableProduct = ({
  products,
  loading,
  changePage,
  currentPage,
  totalPage,
}) => {
  const [productId, setProductId] = useState(0);
  const [productToggler, setProductToggler] = useState(true);
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <>
      {productToggler ? (
        <Container fluid>
          <ProductAdd
            show={showAddProduct}
            onHide={() => setShowAddProduct(false)}
          />
          <Row>
            <Col sm={11}>
              <Table responsive='sm' variant='dark'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Manufacturer</th>
                    <th>Category</th>
                    <th>Created date</th>
                    <th>Update date</th>
                    <th>View Detail</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <th>{product.id}</th>
                      <th>{product.name}</th>
                      <th>{product.description}</th>
                      <th>{product.manufacturerName}</th>
                      <th>{product.categoryName}</th>
                      <th>
                        {product.createdDate
                          ? moment(product.createdDate).format('MMMM Do YYYY')
                          : 'Not yet'}
                      </th>
                      <th>
                        {product.createdDate
                          ? moment(product.updateDate).format('MMMM Do YYYY')
                          : 'Not yet'}
                      </th>
                      <th
                        onClick={() => {
                          setProductId(product.id);
                          setProductToggler(false);
                        }}
                        style={{
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}>
                        View Detail
                      </th>
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
              <Paging
                currentPage={currentPage}
                pagination={changePage}
                totalPage={totalPage}
              />
            </Col>
            <Col sm={1}>
              <div className='d-flex justify-content-center'>
                <button
                  onClick={() => setShowAddProduct(true)}
                  className='btn btn-success'>
                  Add new
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <TableProductDetail
          productId={productId}
          productToggler={() => setProductToggler(true)}
        />
      )}
    </>
  );
};

export default TableProduct;
