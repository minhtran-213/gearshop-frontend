import { Col, Container, Image, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';

import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { getProductDetail as listProductDetail } from '../../redux/actions/ProductsAction';
import style from './ProductDetail.module.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const getProductDetail = useSelector((state) => state.productDetail);
  const { loading, product, error } = getProductDetail;

  const { id } = useParams();
  // console.log(param);
  useEffect(() => {
    dispatch(listProductDetail(id));
  }, [dispatch, id]);
  return (
    <>
      <Header />
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Container className='mx-3 my-5'>
          <Row>
            <Col md={5}>
              <Image fluid src={product.imageurl} rounded />
            </Col>
            <Col md={7}>
              <div className={style['productscreen__right']}>
                <div className={style['right__info']}>
                  <p>
                    <span>{product.name}</span>
                  </p>
                  <p>
                    Price:
                    <span>Something casual</span>
                  </p>
                  <p>
                    Manufacturer:
                    <span>{product.manufacturer.name}</span>
                  </p>

                  <p>
                    <button type='button' onClick={() => {}}>
                      Add To Cart
                    </button>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        // <div className={style['productscreen']}>
        //   <div className={style['productscreen__left']}>
        //     <div className={style['left__image']}>
        //       <img src={product.imageurl} alt='productname' />
        //     </div>
        //     <div className={style['left__info']}>
        //       <p className={style['left__name']}>{product.name} </p>
        //       <p>price: ${product.price}</p>
        //     </div>
        //   </div>
        //   <div className={style['productscreen__right']}>
        //     <div className={style['right__info']}>
        //       <p>
        //         Price
        //         <span>$0.22</span>
        //       </p>
        //       <p>
        //         <button type='button' onClick={() => {}}>
        //           Add To Cart
        //         </button>
        //       </p>
        //     </div>
        //   </div>
        // </div>
      )}

      <Footer />
    </>
  );
};

export default ProductDetail;
