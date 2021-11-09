import { Carousel, Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import { getProductDetail as listProductDetail } from '../../redux/actions/ProductsAction';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const getProductDetail = useSelector((state) => state.productDetail);
  const { productDetailLoading, productDetail, error } = getProductDetail;
  const [selectValue, setSelectValue] = useState(0);
  const [price, setPrice] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    dispatch(listProductDetail(id));
  }, [dispatch, id]);

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
    setPrice(event.target.value);
  };
  return (
    <>
      {productDetailLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Container className=' mx-3 my-5'>
          <Row className='d-flex justify-content-center'>
            <Col sm={9} style={{ width: '400px' }}>
              <Row>
                <Carousel variant='dark' style={{ width: '400px' }}>
                  {productDetail.map((p) => (
                    <Carousel.Item key={p.id} interval={1000}>
                      <img
                        className='img-fluid'
                        src={p.imageUrl}
                        alt='imageUrl'
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Row>
              <Row>
                <h3>Description</h3>
                <hr />
                <p>
                  {productDetail.length > 0
                    ? productDetail[0].productDescription
                    : ''}
                </p>
              </Row>
            </Col>
            <Col sm={3} style={{ marginRight: '0px', marginLeft: '100px' }}>
              <p className='h2' style={{ fontWeight: 'bold' }}>
                {productDetail.length > 0 ? productDetail[0].productName : ''}
              </p>
              <Row>
                <p className='h3'>
                  {productDetail.length > 0
                    ? productDetail[0].productManufacturer
                    : ''}
                </p>
              </Row>
              <Row>
                <select
                  defaultValue={selectValue}
                  onChange={handleSelectChange}
                  className='form-select'>
                  {productDetail.map((p) => (
                    <option key={p.id} value={p.price}>
                      {p.size}
                    </option>
                  ))}
                </select>
              </Row>
              <Row>
                <p
                  className='h5'
                  style={{ textAlign: 'end', marginTop: '20px' }}>
                  $ {price}
                </p>
              </Row>
              <Row>
                <button
                  style={{
                    color: 'white',
                    background: 'red',
                    borderColor: 'red',
                    fontSize: '20px',
                  }}>
                  Add to cart
                </button>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductDetail;
