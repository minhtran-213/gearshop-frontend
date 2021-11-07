import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import { addNewManufacturer } from '../../redux/actions/ManufacturerAction';
import { useDispatch } from 'react-redux';

const MyModal = ({ isOpen, hideModal, title, onSave, body }) => {
  const [manuRequest, setManuRequest] = useState();
  const dispatch = useDispatch();
  return (
    <form
      id='addNewForm'
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addNewManufacturer(manuRequest));
      }}>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for='name'>Name</label>
          <input
            onChange={(event) => {
              const name = event.target.value;
              setManuRequest({ ...manuRequest, ...{ name } });
            }}
            type='text'
            placeholder='Enter manufacturer name'
          />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={hideModal}>
            Cancel
          </button>
          <button
            onClick={() => window.location.reload()}
            form='addNewForm'
            type='submit'
            className='btn btn-primary'>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default MyModal;
