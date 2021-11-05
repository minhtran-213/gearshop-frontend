import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import TableManufacturer from '../component/TableManufacturer';
import TableUser from '../component/TableUser';
import { getAllManufacturerAdmin } from '../../redux/actions/ManufacturerAction';
import { getAllUsers } from '../../redux/actions/UserAction';
import { useEffect } from 'react';

const AdminHome = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.user);
  const getManufacturers = useSelector((state) => state.manufacturer);
  const { loading, users } = getUsers;
  const { manufacturerLoading, manufacturers } = getManufacturers;
  // console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const callManufacturer = () => {
    dispatch(getAllManufacturerAdmin());
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
                <TableUser users={users} loading={loading} />
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
