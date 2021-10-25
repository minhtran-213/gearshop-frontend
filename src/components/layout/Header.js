import {
  Container,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap';

import Button from '@restart/ui/esm/Button';
import { LogoutAuthAction } from '../../redux/actions/AuthAction';
import React from 'react';
import { Routes } from '../../constants/routes';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const Header = ({ auth, logout }) => {
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
            <NavDropdown title='Feature' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#' disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className='d-flex me-5'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
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
                event.preventDefault();
                logout(history);
              }}>
              Logout
            </Button>
            <h5 style={{ color: 'white' }}>{user.fullName}</h5>
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
