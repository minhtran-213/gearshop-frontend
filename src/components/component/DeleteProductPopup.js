import { Modal } from 'react-bootstrap';
import React from 'react';
import { deleteProduct } from '../../redux/actions/ProductsAction';
import { useDispatch } from 'react-redux';

const DeleteProductPopup = ({ show, onHide, productId }) => {
  const dispatch = useDispatch();
  const confirmDelete = (event) => {
    event.preventDefault();
    dispatch(deleteProduct(productId));
  };
  return (
    <form id='deleteProductForm' onSubmit={confirmDelete}>
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='hidden' value={productId} />
          Are you sure you want to delete?
        </Modal.Body>
        <Modal.Footer>
          <button type='button' className='btn btn-secondary' onClick={onHide}>
            Close
          </button>
          <button
            onClick={() => window.location.reload()}
            type='submit'
            className='btn btn-danger'
            form='deleteProductForm'>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default DeleteProductPopup;
