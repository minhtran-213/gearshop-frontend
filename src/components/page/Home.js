import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Paging from '../component/Paging';
import ProductCard from '../component/ProductCard';
import { getProducts as listProducts } from '../../redux/actions/ProductsAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.products);
  const { productLoading, products, error, currentPage, totalPages } =
    getProducts;
  const [page, setPage] = useState(0);

  useEffect(() => {
    // console.log(data);
    dispatch(listProducts(page));
  }, [dispatch, page]);

  const pagination = (page) => {
    setPage(page);
  };
  return (
    <>
      <Container className='mx-0 my-3' fluid>
        <Row>
          <Col>
            <Container fluid style={{ margin: '5px' }}>
              <Row className='d-flex justify-content-center'>
                {productLoading ? (
                  <h2>Loading...</h2>
                ) : error ? (
                  <h2>Error</h2>
                ) : (
                  products
                    .filter((product) => product.productDetail.length > 0)
                    .map((product) => (
                      <Col sm={4} xl={4} key={product.id}>
                        <ProductCard
                          id={product.id}
                          name={product.name}
                          imgUrl={
                            product.productDetail[0]
                              ? product.productDetail[0].imageUrl
                              : 'https://www.nogapinsulation.com.au/wp-content/uploads/2019/12/product-coming-soon-no-gap-insulation.jpg'
                          }
                          price={
                            product.productDetail[0]
                              ? product.productDetail[0].price
                              : '0'
                          }
                        />
                      </Col>
                    ))
                )}
              </Row>
              <Row>
                <div className='d-flex justify-content-center'>
                  <Paging
                    currentPage={currentPage}
                    totalPage={totalPages}
                    pagination={pagination}
                  />
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
