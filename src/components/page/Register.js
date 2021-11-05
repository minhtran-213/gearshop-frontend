import React from 'react';
import { RegisterAuthAction } from '../../redux/actions/AuthAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';

const Register = ({ user, register }) => {
  const [userState, setUserState] = useState({});
  const history = useHistory();

  return (
    <>
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
                      register(userState, history);
                      //   console.log(user);
                    }}>
                    <h3 className='text-center'>Register</h3>
                    <div className='form-outline mb-4'>
                      <label htmlFor='emailInput' className='form-label'>
                        Email
                      </label>
                      <input
                        type='email'
                        id='emailInput'
                        className='form-control form-control-lg'
                        onChange={(event) => {
                          const email = event.target.value;
                          setUserState({ ...userState, ...{ email } });
                        }}
                      />
                    </div>
                    <div className='form-outline mb-4'>
                      <label htmlFor='firstNameInput' className='form-label'>
                        First Name
                      </label>
                      <input
                        type='text'
                        id='firstNameInput'
                        className='form-control form-control-lg'
                        onChange={(event) => {
                          const firstName = event.target.value;
                          setUserState({
                            ...userState,
                            ...{ first_name: firstName },
                          });
                        }}
                      />
                    </div>
                    <div className='form-outline mb-4'>
                      <label htmlFor='lastNameInput' className='form-label'>
                        Last Name
                      </label>
                      <input
                        type='lastName'
                        id='lastNameInput'
                        className='form-control form-control-lg'
                        onChange={(event) => {
                          const lastName = event.target.value;
                          setUserState({
                            ...userState,
                            ...{ last_name: lastName },
                          });
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
                          setUserState({ ...userState, ...{ password } });
                        }}
                      />
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button
                        className='btn btn-primary btn-lg btn-block'
                        type='submit'>
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    register: (userState, history) => {
      dispatch(RegisterAuthAction(userState, history));
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Register);
