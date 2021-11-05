import React from 'react';
import { Table } from 'react-bootstrap';

const TableManufacturer = ({ manufacturers, loading }) => {
  // console.log(manufacturers);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Table responsive='sm' variant='dark'>
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
      )}
    </>
  );
};

export default TableManufacturer;
