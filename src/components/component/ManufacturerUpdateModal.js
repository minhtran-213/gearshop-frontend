import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import { updateManufacturer } from '../../redux/actions/ManufacturerAction';
import { useDispatch } from 'react-redux';

const ManuFacturerUpdateModal = ({
  isOpen,
  hideModal,
  title,
  onSave,
  body,
  manufacturer,
}) => {
  const [manuRequest, setManuRequest] = useState(manufacturer);
  const dispatch = useDispatch();
  return (
    <form
      id='updateForm'
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(updateManufacturer(manuRequest));
      }}>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor='name'>Name</label>
          <input type='hidden' value={manuRequest.id} />
          <input
            value={manuRequest.name}
            onChange={(event) => {
              const name = event.target.value;
              setManuRequest({
                ...manuRequest,
                ...{ name },
              });
            }}
            type='text'
          />
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={hideModal}>
            Cancel
          </button>
          <button
            onClick={() => window.location.reload()}
            form='updateForm'
            type='submit'
            className='btn btn-primary'>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default ManuFacturerUpdateModal;
