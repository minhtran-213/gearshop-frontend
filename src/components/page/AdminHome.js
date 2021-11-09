import { Col, Nav, Row, Tab } from 'react-bootstrap';
import React, { useState } from 'react';
import { getAllUsers, sortUser } from '../../redux/actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';

import TableAddress from '../component/TableAddress';
import TableCategory from '../component/TableCategory';
import TableManufacturer from '../component/TableManufacturer';
import TableProduct from '../component/TableProduct';
import TableUser from '../component/TableUser';
import { getAllAddressInAdmin } from '../../redux/actions/AddressAction';
import { getAllManufacturerAdmin } from '../../redux/actions/ManufacturerAction';
import { getAllProductAdmin } from '../../redux/actions/ProductsAction';
import { getCategories } from '../../redux/actions/CategoryAction';
import { useEffect } from 'react';

const AdminHome = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.user);
  const getManufacturers = useSelector((state) => state.manufacturer);
  const getCategoryAdmin = useSelector((state) => state.categoryAdmin);
  const getProductAdmin = useSelector((state) => state.productAdmin);
  const {
    categoryAdminLoading,
    categories,
    categoryCurrentPage,
    categoryTotalPages,
  } = getCategoryAdmin;
  const { loading, users, userTotalPages, userCurrentPage } = getUsers;
  const {
    productAdminLoading,
    productAdmin,
    productAdminCurrentPage,
    productAdminTotalPages,
  } = getProductAdmin;
  const {
    manufacturerLoading,
    manufacturers,
    manufacturerCurrentPage,
    manufacturerTotalPages,
  } = getManufacturers;
  const [userPage, setUserPage] = useState(0);
  const [userToggler, setUserToggle] = useState(true);
  const [manufacturerPage, setManufacturerPage] = useState(0);
  const [categoryPage, setCategoryPage] = useState(0);
  const [productPage, setProductPage] = useState(0);
  const { addressLoading, addresses } = useSelector(
    (state) => state.addressAdmin
  );
  // console.log(users);
  useEffect(() => {
    dispatch(getAllUsers(userPage));
    dispatch(getAllManufacturerAdmin(manufacturerPage));
    dispatch(getCategories(categoryPage));
    dispatch(getAllProductAdmin(productPage));
  }, [dispatch, userPage, manufacturerPage, categoryPage, productPage]);

  const callManufacturer = () => {
    dispatch(getAllManufacturerAdmin(manufacturerPage));
  };

  const callAddress = (userId) => {
    dispatch(getAllAddressInAdmin(userId));
  };
  const changePageUser = (pageChanged) => {
    setUserPage(pageChanged);
  };
  const changeManufacturerPage = (pageChanged) => {
    setManufacturerPage(pageChanged);
  };
  const changeCategoryPage = (pageChanged) => {
    setCategoryPage(pageChanged);
  };
  const sorting = (sorter) => {
    dispatch(sortUser(userPage, sorter));
  };

  const changeProductPage = (pageChanged) => {
    setProductPage(pageChanged);
  };

  const watchUserAddress = (isWatching) => {
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
              <Nav.Item>
                <Nav.Link eventKey='third'>Category</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='fourth'>Product</Nav.Link>
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
                    currentPage={userCurrentPage}
                    totalPages={userTotalPages}
                    changePage={changePageUser}
                    sorting={sorting}
                    userAddress={watchUserAddress}
                    findAddress={callAddress}
                  />
                ) : (
                  <TableAddress
                    loading={addressLoading}
                    addresses={addresses}
                    userAddress={watchUserAddress}
                  />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <TableManufacturer
                  manufacturers={manufacturers}
                  loading={manufacturerLoading}
                  currentPage={manufacturerCurrentPage}
                  changePage={changeManufacturerPage}
                  totalPage={manufacturerTotalPages}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='third'>
                <TableCategory
                  categories={categories}
                  loading={categoryAdminLoading}
                  currentPage={categoryCurrentPage}
                  totalPage={categoryTotalPages}
                  changePage={changeCategoryPage}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='fourth'>
                <TableProduct
                  products={productAdmin}
                  loading={productAdminLoading}
                  currentPage={productAdminCurrentPage}
                  totalPage={productAdminTotalPages}
                  changePage={changeProductPage}
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
