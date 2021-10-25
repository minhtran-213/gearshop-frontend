import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Paging from '../component/Paging';
import ProductCard from '../component/ProductCard';
import { getProducts as listProducts } from '../../redux/actions/ProductsAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.products);
  const { loading, products, error, activePage, totalPage } = getProducts;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // console.log(data);
    dispatch(listProducts(currentPage));
  }, [dispatch, currentPage]);
  // console.log(products);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Header />
      <Container className='mx-0 my-3'>
        <Row>
          <Col>
            <Container fluid='sm' style={{ margin: '5px' }}>
              <Row>
                {loading ? (
                  <h2>Loading...</h2>
                ) : error ? (
                  <h2>Error</h2>
                ) : (
                  products.map((product) => (
                    <Col key={product.id}>
                      <ProductCard
                        name={product.name}
                        imgUrl={product.imageurl}
                        price={product.price}
                        id={product.id}
                      />
                    </Col>
                  ))
                )}
              </Row>
              <Row>
                <div className='d-flex justify-content-center'>
                  <Paging
                    activePage={activePage}
                    totalPage={totalPage}
                    pagination={pagination}
                  />
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
