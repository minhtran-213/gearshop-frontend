import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from 'react';

import CategoryAdd from './CategoryAdd';
import CategoryDetail from './CategoryDetail';
import CategoryUpdate from './CategoryUpdate';
import DeleteCatePopup from './DeleteCatePopup';
import Paging from './Paging';

const TableCategory = ({
  categories,
  loading,
  currentPage,
  totalPage,
  changePage,
}) => {
  const [categoryId, setCategoryId] = useState();
  const [showCategoryDetail, setShowCategoryDetail] = useState(false);
  const [showUpdateCategory, setShowUpdateCategory] = useState(false);
  const [showAddCategory, setShowCategoryAdd] = useState(false);
  const [showDeleteCategory, setShowDeleteCategory] = useState(false);
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
            category={categoryId}
          />
          <CategoryUpdate
            show={showUpdateCategory}
            onHide={() => setShowUpdateCategory(false)}
            category={categoryId}
          />
          <CategoryAdd
            show={showAddCategory}
            onHide={() => setShowCategoryAdd(false)}
          />
          <DeleteCatePopup
            show={showDeleteCategory}
            onHide={() => setShowDeleteCategory(false)}
            categoryId={categoryId}
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
                            setCategoryId(category.id);
                          }}
                          style={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          }}>
                          View Detail
                        </p>
                      </th>
                      <th>
                        <button
                          className='btn btn-primary'
                          onClick={() => {
                            setShowUpdateCategory(true);
                            setCategoryId(category.id);
                          }}>
                          Update
                        </button>
                      </th>
                      <th>
                        <button
                          onClick={() => {
                            setShowDeleteCategory(true);
                            setCategoryId(category.id);
                          }}
                          className='btn btn-danger'>
                          Delete
                        </button>
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
            <Col>
              <div className='d-flex justify-content-center'>
                <button
                  onClick={() => setShowCategoryAdd(true)}
                  className='btn btn-success'>
                  Add new
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TableCategory;
