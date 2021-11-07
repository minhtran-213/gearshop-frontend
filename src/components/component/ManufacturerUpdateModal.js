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
  const [manuRequest, setManuRequest] = useState();
  const dispatch = useDispatch();
  return (
    <form
      id='addNewForm'
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
          <input type='hidden' value={manufacturer.id} />
          <input
            value={manufacturer.name}
            onChange={(event) => {
              const name = event.target.value;
              setManuRequest({
                ...manuRequest,
                ...{ name, id: manufacturer.id },
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
            // onClick={() => window.location.reload()}
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

export default ManuFacturerUpdateModal;
