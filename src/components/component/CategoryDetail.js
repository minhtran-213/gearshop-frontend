import { Col, Modal, Row } from 'react-bootstrap';

import React from 'react';

const CategoryDetail = ({ category, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{category.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>Id</Col>
          <Col>{category.id}</Col>
        </Row>
        <Row>
          <Col>Name</Col>
          <Col>{category.name}</Col>
        </Row>
        <Row>
          <Col>Parent Category</Col>
          <Col>
            {category.parentCategory ? category.parentCategory.name : 'empty'}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryDetail;
