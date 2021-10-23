import {
  Container,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router';

import Button from '@restart/ui/esm/Button';
import { LogoutAuthAction } from '../../redux/actions/AuthAction';
import React from 'react';
import { Routes } from '../../constants/routes';
import { connect } from 'react-redux';

const Header = ({ auth, logout }) => {
  // console.log(auth);
  const { user } = auth;
  const history = useHistory();
  return (
    // <header className='p-3 bg-dark text-white'>
    //   <div className='container'>
    //     <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
    //       <Link
    //         to='/'
    //         className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'>
    //         GearShop
    //       </Link>

    //       <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
    //         <li className='nav-item dropdown'>
    //           <Link
    //             className='nav-link dropdown-toggle'
    //             to='#'
    //             id='navbarDropdown'
    //             role='button'
    //             data-bs-toggle='dropdown'
    //             aria-expanded='false'>
    //             Dropdown
    //           </Link>
    //           <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
    //             <li>
    //               <Link className='dropdown-item' to='#'>
    //                 Action
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className='dropdown-item' to='#'>
    //                 Another action
    //               </Link>
    //             </li>
    //             <li>
    //               <hr className='dropdown-divider' />
    //             </li>
    //             <li>
    //               <Link className='dropdown-item' to='#'>
    //                 Something else here
    //               </Link>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <Link to='#' className='nav-link px-2 text-white'>
    //             Pricing
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to='#' className='nav-link px-2 text-white'>
    //             FAQs
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to='#' className='nav-link px-2 text-white'>
    //             About
    //           </Link>
    //         </li>
    //       </ul>

    //       <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'>
    //         <input
    //           type='search'
    //           className='form-control form-control-dark'
    //           placeholder='Search...'
    //           aria-label='Search'
    //         />
    //       </form>
    //       {!auth.isLoggedIn ? (
    //         <div className='text-end'>
    //           <button type='button' className='btn btn-outline-light me-2'>
    //             <Link
    //               style={{ textDecoration: 'none', color: 'white' }}
    //               to='/signin'>
    //               Login
    //             </Link>
    //           </button>
    //           <button type='button' className='btn btn-warning'>
    //             <Link
    //               style={{ textDecoration: 'none', color: 'black' }}
    //               to='/register'>
    //               Sign up
    //             </Link>
    //           </button>
    //         </div>
    //       ) : (
    //         <>
    //           <button
    //             type='button'
    //             className='btn btn-warning'
    //             onClick={(event) => {
    //               event.preventDefault();
    //               logout(history);
    //             }}>
    //             Logout
    //           </button>

    //           <h5 className='ps-2 pt-2'>{user.fullName}</h5>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </header>
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-5 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>Link</Nav.Link>
            <NavDropdown title='Link' id='navbarScrollingDropdown'>
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
