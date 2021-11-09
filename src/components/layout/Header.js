import {
  Container,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap';
import React, { useEffect } from 'react';

import Button from '@restart/ui/esm/Button';
import { LogoutAuthAction } from '../../redux/actions/AuthAction';
import { Routes } from '../../constants/routes';
import { connect } from 'react-redux';
import { getCategoriesUser } from '../../redux/actions/CategoryAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Header = ({ auth, logout }) => {
  const dispatch = useDispatch();
  const getCategories = useSelector((state) => state.categoriesUser);
  const { categories } = getCategories;
  useEffect(() => {
    dispatch(getCategoriesUser());
  }, [dispatch]);
  // console.log(auth);
  const { user } = auth;
  const history = useHistory();
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/'>Gear shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-5 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll>
            {categories.map((category) => (
              <NavDropdown
                key={category.id}
                title={category.name}
                id='navbarScrollingDropdown'>
                {category.categories.map((c) => (
                  <NavDropdown.Item
                    key={c.id}
                    href={`/homepage/category/${c.id}`}>
                    {c.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav>
          {auth.roles.includes('ROLE_USER') ? (
            <Form className='d-flex me-5'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          ) : (
            <></>
          )}
        </Navbar.Collapse>
        {!auth.isLoggedIn ? (
          <>
            <Nav.Link
              href={Routes.SIGN_IN}
              className='btn btn-light me-3'
              style={{ color: 'black' }}>
              Sign in
            </Nav.Link>
            <Nav.Link
              href={Routes.SIGN_UP}
              className='btn btn-warning'
              style={{ color: 'black' }}>
              Sign up
            </Nav.Link>
          </>
        ) : (
          <>
            <Button
              className='btn btn-warning me-3'
              onClick={(event) => {
                // event.preventDefault();
                // console.log(history);
                // history.push('/signin');
                logout(history);
              }}>
              Logout
            </Button>

            <h5 style={{ color: 'white' }}>{user.first_name}</h5>
          </>
        )}
      </Container>
    </Navbar>
  );
};

const mapStateToProp = (state) => {
  return state;
};

const mapDispatchToProp = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(LogoutAuthAction(history));
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Header);
