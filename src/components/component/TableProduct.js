import React from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';

const TableProduct = ({ users }) => {
  return (
    <>
      <Table responsive='sm' variant='dark'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.email}</th>
              <th>{user.phoneNumber ? user.phoneNumber : 'empty'}</th>
              <th>{user.firstName}</th>
              <th>{user.lastName}</th>
              <th>
                {user.birthday
                  ? moment(user.birthday).format('MMMM Do YYYY')
                  : 'empty'}
              </th>
              <th>{user.gender ? user.gender : 'empty'}</th>
              <th>{moment(user.dateCreated).format('MMMM Do YYYY')}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableProduct;
