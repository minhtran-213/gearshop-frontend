import { Col, Container, Row, Table } from 'react-bootstrap';

import React from 'react';

const TableAddress = ({ loading, addresses }) => {
  console.log(addresses);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Row>
            <Col sm={12}>
              <Table responsive='sm' variant='dark'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>
                      <div>Address Name</div>
                    </th>
                    <th>
                      <div>City</div>
                    </th>
                    <th>
                      <div>District</div>
                    </th>
                    <th>
                      <div>Ward</div>
                    </th>
                    <th>
                      <div>Default Address</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {addresses.map((address) => (
                    <tr key={address.id}>
                      <th>{address.id}</th>
                      <th>{address.addressName}</th>
                      <th>{address.city}</th>
                      <th>{address.district}</th>
                      <th>{address.ward}</th>
                      <th>{address.defaultAddress ? 'Yes' : 'No'}</th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TableAddress;
