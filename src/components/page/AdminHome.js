import { Col, Nav, Row, Tab } from 'react-bootstrap';
import React, { useState } from 'react';
import { getAllUsers, sortUser } from '../../redux/actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';

import TableAddress from '../component/TableAddress';
import TableManufacturer from '../component/TableManufacturer';
import TableUser from '../component/TableUser';
import { getAllAddressInAdmin } from '../../redux/actions/AddressAction';
import { getAllManufacturerAdmin } from '../../redux/actions/ManufacturerAction';
import { useEffect } from 'react';

const AdminHome = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.user);
  const getManufacturers = useSelector((state) => state.manufacturer);
  const { loading, users, totalPages, currentPage } = getUsers;
  const { manufacturerLoading, manufacturers } = getManufacturers;
  const [page, setPage] = useState(0);
  const [userToggler, setUserToggle] = useState(true);
  const { addressLoading, addresses } = useSelector(
    (state) => state.addressAdmin
  );
  // console.log(users);
  useEffect(() => {
    dispatch(getAllUsers(page));
  }, [dispatch, page]);

  const callManufacturer = () => {
    dispatch(getAllManufacturerAdmin());
  };

  const callAddress = (userId) => {
    dispatch(getAllAddressInAdmin(userId));
  };
  const changePage = (pageChanged) => {
    setPage(pageChanged);
  };
  const sorting = (sorter) => {
    dispatch(sortUser(page, sorter));
  };
  const watchUserAddress = (isWatching) => {
    console.log(isWatching);
    console.log(userToggler);
    setUserToggle(isWatching);
  };
  return (
    <div className='m-2'>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm={3}>
            <Nav variant='pills' className='flex-column'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={callManufacturer} eventKey='second'>
                  Manufacturer
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                {userToggler ? (
                  <TableUser
                    users={users}
                    loading={loading}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    changePage={changePage}
                    sorting={sorting}
                    userAddress={watchUserAddress}
                    findAddress={callAddress}
                  />
                ) : (
                  <TableAddress
                    loading={addressLoading}
                    addresses={addresses}
                  />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <TableManufacturer
                  manufacturers={manufacturers}
                  loading={manufacturerLoading}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AdminHome;
