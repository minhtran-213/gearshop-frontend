import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from 'react';

import MyModal from './MyModal';
import Paging from './Paging';

const TableManufacturer = ({
  manufacturers,
  loading,
  currentPage,
  totalPage,
  changePage,
}) => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container fluid>
          <MyModal
            hideModal={hideModal}
            isOpen={showModal}
            title='New manufacturer'
          />
          <Row>
            <Col sm={10}>
              <Table responsive variant='dark'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {manufacturers.map((manufacturer) => (
                    <tr key={manufacturer.id}>
                      <th>{manufacturer.id}</th>
                      <th>{manufacturer.name}</th>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className='d-flex justify-content-center'>
                <Paging
                  currentPage={currentPage}
                  pagination={changePage}
                  totalPage={totalPage}
                />
              </div>
            </Col>
            <Col>
              <button
                onClick={() => setShowModal(true)}
                className='btn btn-success'>
                Add new
              </button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TableManufacturer;
