import { BsSortDownAlt, BsSortUpAlt } from 'react-icons/bs';
import { Col, Container, Modal, Pagination, Row, Table } from 'react-bootstrap';
import React, { useState } from 'react';

import moment from 'moment';

const TableUser = ({
  users,
  loading,
  currentPage,
  totalPages,
  changePage,
  sorting,
  findAddress,
  userAddress,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [sort, setSort] = useState({});
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
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Modal show={modalShow} centered>
            <Modal.Header>Modal Head part</Modal.Header>
            <Modal.Body>Hi, This is the Modal</Modal.Body>
            <Modal.Footer>
              <button onClick={() => setModalShow(false)}>Close Modal</button>
            </Modal.Footer>
          </Modal>
          <Row>
            <Col sm={12}>
              <Table responsive='sm' variant='dark'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>
                      <div>Email</div>
                      <span>
                        <BsSortUpAlt
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'email',
                                direction: 'asc',
                              },
                            });
                            sorting(sort);
                          }}
                          size='1.5rem'
                        />
                        <BsSortDownAlt
                          size='1.5rem'
                          className='mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'email',
                                direction: 'desc',
                              },
                            });
                            sorting(sort);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      <div>Phone Number</div>
                      <span>
                        <BsSortUpAlt
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'phoneNumber',
                                direction: 'asc',
                              },
                            });
                            sorting(sort);
                          }}
                          size='1.5rem'
                        />
                        <BsSortDownAlt
                          size='1.5rem'
                          className='mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'phoneNumber',
                                direction: 'desc',
                              },
                            });
                            sorting(sort);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      <div>First Name</div>
                      <span>
                        <BsSortUpAlt
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'firstName',
                                direction: 'asc',
                              },
                            });
                            sorting(sort);
                          }}
                          size='1.5rem'
                        />
                        <BsSortDownAlt
                          size='1.5rem'
                          className='mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'firstName',
                                direction: 'desc',
                              },
                            });
                            sorting(sort);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      <div>Last Name</div>
                      <span>
                        <BsSortUpAlt
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'lastName',
                                direction: 'asc',
                              },
                            });
                            sorting(sort);
                          }}
                          size='1.5rem'
                        />
                        <BsSortDownAlt
                          size='1.5rem'
                          className='mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'lastName',
                                direction: 'desc',
                              },
                            });
                            sorting(sort);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      <div>Birthday</div>
                      <span>
                        <BsSortUpAlt
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'birthday',
                                direction: 'asc',
                              },
                            });
                            sorting(sort);
                          }}
                          size='1.5rem'
                        />
                        <BsSortDownAlt
                          size='1.5rem'
                          className='mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'birthday',
                                direction: 'desc',
                              },
                            });
                            sorting(sort);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      <div>Gender</div>
                      <span>
                        <BsSortUpAlt
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'gender',
                                direction: 'asc',
                              },
                            });
                            sorting(sort);
                          }}
                          size='1.5rem'
                        />
                        <BsSortDownAlt
                          size='1.5rem'
                          className='mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'gender',
                                direction: 'desc',
                              },
                            });
                            sorting(sort);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      <div>Date Created</div>
                      <span>
                        <BsSortUpAlt
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'dateCreated',
                                direction: 'asc',
                              },
                            });
                            sorting(sort);
                          }}
                          size='1.5rem'
                        />
                        <BsSortDownAlt
                          size='1.5rem'
                          className='mx-1'
                          style={{ marginRight: '0px' }}
                          onClick={() => {
                            setSort({
                              ...sort,
                              ...{
                                name: 'dateCreated',
                                direction: 'desc',
                              },
                            });
                            sorting(sort);
                          }}
                        />
                      </span>
                    </th>
                    <th>Address</th>
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
                      <th>
                        <button
                          onClick={() => {
                            findAddress(user.id);
                            userAddress(false);
                          }}
                          className='btn btn-success'>
                          View Detail
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className='d-flex justify-content-center'>
                <Pagination>{items}</Pagination>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TableUser;
