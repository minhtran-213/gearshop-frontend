import { Pagination, Table } from 'react-bootstrap';

import React from 'react';
import moment from 'moment';

const TableUser = ({ users, loading, currentPage, totalPages, changePage }) => {
  console.log('currentPage', currentPage);
  console.log('totalPage', totalPages);
  let active = currentPage;
  let items = [];
  for (let number = 0; number < totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => changePage(number)}
        key={number}
        active={number === active}>
        {number + 1}
      </Pagination.Item>
    );
  }
  return (
    <div className='container'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='col'>
          <div className='row'>
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
          </div>

          <Pagination>{items}</Pagination>
        </div>
      )}
    </div>
  );
};

export default TableUser;
