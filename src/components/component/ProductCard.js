import Button from '@restart/ui/esm/Button';
import { Card } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';

const ProductCard = ({ imgUrl, name, price, id }) => {
  const history = useHistory();
  return (
    <Card style={{ width: '18rem' }} className='mb-3'>
      <Card.Img variant='top' src={imgUrl} style={{ height: '15rem' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>$ {price}</Card.Text>
        <Button
          className='btn btn-primary
        '
          onClick={() => {
            history.push(`/productDetail/${id}`);
          }}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
