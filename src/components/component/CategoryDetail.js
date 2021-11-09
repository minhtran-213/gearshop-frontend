import { Col, Modal, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const CategoryDetail = ({ category, show, onHide }) => {
  const [cateRequest, setCateRequest] = useState({});
  useEffect(() => {
    const initData = async () => {
      const response = await axios.get(`/category/${category}`);
      setCateRequest(response.data.object);
    };
    return initData;
  }, [category]);
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{cateRequest.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>Id</Col>
          <Col>{cateRequest.id}</Col>
        </Row>
        <Row>
          <Col>Name</Col>
          <Col>{cateRequest.name}</Col>
        </Row>
        <Row>
          <Col>Parent Category</Col>
          <Col>
            {cateRequest.parentCategory
              ? cateRequest.parentCategory.name
              : 'empty'}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryDetail;
