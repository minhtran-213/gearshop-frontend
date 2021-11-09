import React, { useEffect, useState } from 'react';

import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { updateCategory } from '../../redux/actions/CategoryAction';
import { useDispatch } from 'react-redux';

const CategoryUpdate = ({ show, onHide, category }) => {
  const dispatch = useDispatch();
  const [cateRequest, setCateRequest] = useState({
    id: 0,
    name: '',
    parentCategoryId: 'none',
  });
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const categoriesResponse = await axios.get('/admin/basicCategories');
    setCategories(categoriesResponse.data.object);
    const response = await axios.get(`/category/${category}`);
    const { object } = response.data;
    setCateRequest({
      ...cateRequest,
      ...{
        id: object.id,
        name: object.name,
        parentCategoryId: object.parentCategory
          ? object.parentCategory.id
          : 'none',
      },
    });
  }, [category]);
  const handleSelectChange = (event) => {
    setCateRequest({
      ...cateRequest,
      ...{ parentCategoryId: event.target.value },
    });
  };
  return (
    <form
      id='updateCategory'
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(updateCategory(cateRequest));
      }}>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='hidden' value={category} />
          <label htmlFor='name'>Name</label>
          <input
            className='form-control'
            id='name'
            type='text'
            value={cateRequest.name}
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
              <option value={category.id}>{category.name}</option>
            ))}
            <option defaultValue value={0}>
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
            form='updateCategory'
            className='btn btn-primary'>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default CategoryUpdate;
