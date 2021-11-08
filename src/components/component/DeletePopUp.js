import { Modal } from 'react-bootstrap';
import React from 'react';
import { deleteManufacturer } from '../../redux/actions/ManufacturerAction';
import { useDispatch } from 'react-redux';

const DeletePopUp = ({ show, id, hide }) => {
  const dispatch = useDispatch();
  const confirmDelete = () => {
    dispatch(deleteManufacturer(id));
  };
  return (
    <form id='deleteConfirm' onSubmit={confirmDelete}>
      <Modal show={show} onHide={hide}>
        <Modal.Header>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='hidden' value={id} />
          Are you sure you want to delete?
        </Modal.Body>
        <Modal.Footer>
          <button type='button' className='btn btn-secondary' onClick={hide}>
            Close
          </button>
          <button
            type='submit'
            className='btn btn-danger'
            form='deleteConfirm'
            onClick={() => window.location.reload()}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default DeletePopUp;
