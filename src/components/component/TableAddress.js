import { Col, Container, Row, Table } from 'react-bootstrap';

import { IoIosArrowRoundBack } from 'react-icons/io';
import React from 'react';

const TableAddress = ({ loading, addresses, userAddress, isProductDetail }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <p>
            <IoIosArrowRoundBack
              style={{ cursor: 'pointer' }}
              size='2rem'
              onClick={() => {
                userAddress(true);
              }}
            />
            <strong>Back to user list</strong>
          </p>
          {addresses.length > 0 ? (
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
          ) : (
            <h2>No item found</h2>
          )}
        </Container>
      )}
    </>
  );
};

export default TableAddress;
