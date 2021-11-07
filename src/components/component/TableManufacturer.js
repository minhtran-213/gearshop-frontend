import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from 'react';

import ManuFacturerAddModal from './ManuFacturerAddModal';
import ManuFacturerUpdateModal from './ManufacturerUpdateModal';
import Paging from './Paging';

const TableManufacturer = ({
  manufacturers,
  loading,
  currentPage,
  totalPage,
  changePage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentManufacturer, setCurrentManufacturer] = useState({});

  const hideModal = () => {
    setShowModal(false);
  };
  const hideUpdateModal = () => {
    setShowUpdateModal(false);
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container fluid>
          <ManuFacturerAddModal
            hideModal={hideModal}
            isOpen={showModal}
            title='New manufacturer'
          />
          <ManuFacturerUpdateModal
            hideModal={hideUpdateModal}
            isOpen={showUpdateModal}
            title='Update manufacturer'
            manufacturer={currentManufacturer}
          />
          <Row>
            <Col sm={10}>
              <Table responsive variant='dark'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {manufacturers.map((manufacturer) => (
                    <tr key={manufacturer.id}>
                      <th>{manufacturer.id}</th>
                      <th>{manufacturer.name}</th>
                      <th>
                        <button
                          onClick={() => {
                            setCurrentManufacturer(manufacturer);
                            setShowUpdateModal(true);
                          }}
                          className='btn btn-primary'>
                          Update
                        </button>
                      </th>
                      <th>
                        <button className='btn btn-danger'>Delete</button>
                      </th>
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
