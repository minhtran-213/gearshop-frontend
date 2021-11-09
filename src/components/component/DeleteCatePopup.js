import { Modal } from 'react-bootstrap';
import React from 'react';
import { deleteCategory } from '../../redux/actions/CategoryAction';
import { useDispatch } from 'react-redux';

const DeleteCatePopup = ({ show, onHide, categoryId }) => {
  const dispatch = useDispatch();
  const confirmDelete = () => {
    dispatch(deleteCategory(categoryId));
  };
  return (
    <form id='deleteCateConfirm' onSubmit={confirmDelete}>
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='hidden' value={categoryId} />
          Are you sure you want to delete?
        </Modal.Body>
        <Modal.Footer>
          <button type='button' className='btn btn-secondary' onClick={onHide}>
            Close
          </button>
          <button
            type='submit'
            className='btn btn-danger'
            form='deleteCateConfirm'
            onClick={() => window.location.reload()}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default DeleteCatePopup;
