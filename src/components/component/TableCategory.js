import { Col, Container, Row, Table } from 'react-bootstrap';

import Paging from './Paging';
import React from 'react';

const TableCategory = ({
  categories,
  loading,
  currentPage,
  totalPage,
  changePage,
}) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
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
