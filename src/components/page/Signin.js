import React, { useState } from 'react';

import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { LoginAuthAction } from '../../redux/actions/AuthAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const Signin = ({ login }) => {
  const [userRequest, setUserRequest] = useState({});
  const history = useHistory();
  return (
    <>
      <Header />
      <section className='vh-100' style={{ backgroundColor: '#508bfc' }}>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div
                className='card shadow-2-strong'
                style={{ borderRadius: '1rem' }}>
                <div className='card-body p-5'>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      login(userRequest, history);
                    }}>
                    <h3 className='text-center'>Sign in</h3>
                    <div className='form-outline mb-4'>
                      <label htmlFor='email' className='form-label'>
                        Email
                      </label>
                      <input
                        type='email'
                        id='emailInput'
                        className='form-control form-control-lg'
                        onChange={(event) => {
                          const email = event.target.value;
                          setUserRequest({ ...userRequest, ...{ email } });
                        }}
                      />
                    </div>
                    <div className='form-outline mb-4'>
                      <label htmlFor='password' className='form-label'>
                        Password
                      </label>
                      <input
                        type='password'
                        id='passwordInput'
                        className='form-control form-control-lg'
                        onChange={(event) => {
                          const password = event.target.value;
                          setUserRequest({ ...userRequest, ...{ password } });
                        }}
                      />
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button
                        className='btn btn-primary btn-lg btn-block'
                        type='submit'>
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const mapStateToProp = (state) => {
  return state;
};

const mapDispatchToProp = (dispatch) => {
  return {
    login: (userRequest, history) => {
      dispatch(LoginAuthAction(userRequest, history));
    },
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(Signin);
