import React, { useEffect, useState } from 'react';

import { Modal } from 'react-bootstrap';
import { addNewCategory } from '../../redux/actions/CategoryAction';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const CategoryAdd = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const [cateRequest, setCateRequest] = useState({
    name: '',
    parentCategoryId: 0,
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const initData = async () => {
      const categoriesResponse = await axios.get('/admin/basicCategories');
      setCategories(categoriesResponse.data.object);
    };
    return initData;
  }, []);
  const handleSelectChange = (event) => {
    setCateRequest({
      ...cateRequest,
      ...{ parentCategoryId: event.target.value },
    });
  };
  return (
    <form
      id='addCategory'
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addNewCategory(cateRequest));
      }}>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor='name'>Name</label>
          <input
            className='form-control'
            id='name'
            type='text'
            onChange={(event) =>
              setCateRequest({
                ...cateRequest,
                ...{ name: event.target.value },
              })
            }
          />
          <label className='form-label' htmlFor='parentId'>
            Parent
          </label>
          <select
            className='form-select'
            id='parentId'
            value={cateRequest.parentCategoryId}
            onChange={handleSelectChange}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
            <option defaultValue value=''>
              Nothing
            </option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={onHide} className='btn btn-secondary'>
            Close
          </button>
          <button
            onClick={() => window.location.reload()}
            type='submit'
            form='addCategory'
            className='btn btn-primary'>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default CategoryAdd;
