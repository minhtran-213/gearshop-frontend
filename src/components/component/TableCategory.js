import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from 'react';

import CategoryDetail from './CategoryDetail';
import Paging from './Paging';
import axios from 'axios';

const TableCategory = ({
  categories,
  loading,
  currentPage,
  totalPage,
  changePage,
}) => {
  const [categoryDetail, setCategoryDetail] = useState({});
  const [showCategoryDetail, setShowCategoryDetail] = useState(false);
  const getCategory = async (id) => {
    const response = await axios.get(`/category/${id}`);
    setCategoryDetail(response.data.object);
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <CategoryDetail
            onHide={() => {
              setShowCategoryDetail(false);
            }}
            show={showCategoryDetail}
            category={categoryDetail}
          />
          <Row>
            <Col sm={10}>
              <Table responsive variant='dark'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>View Detail</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <th>{category.id}</th>
                      <th>{category.name}</th>
                      <th>
                        <p
                          onClick={() => {
                            setShowCategoryDetail(true);
                            getCategory(category.id);
                          }}
                          style={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          }}>
                          View Detail
                        </p>
                      </th>
                      <th>
                        <button>Update</button>
                      </th>
                      <th>
                        <button>Delete</button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div>
                <Paging
                  currentPage={currentPage}
                  pagination={changePage}
                  totalPage={totalPage}
                />
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TableCategory;
