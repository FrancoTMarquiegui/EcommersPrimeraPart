import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getNewsThunk } from '../store/slices/news.slice';

const ProductsDetail = () => {


  const { id } = useParams();

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  const productsList = useSelector(state => state.products);

  const producto = productsList.find(productsItem => productsItem.id === Number(id));
  const relateProducts = productsList.filter(productsItem => productsItem.category.id)



  return (
    <div>
      <Row>
        <Col lg={6}>
          <img src={producto?.productImgs?.[0]} alt="" className='im-fluid' />
        </Col>
        <Col lg={6}>

          <h1>{producto?.title}</h1>
          <b>{producto?.description}</b>
          <p>Precio</p>
          <h3>{producto?.price}</h3>

        </Col>

      </Row>


      <ListGroup variant="flush" className='list'>
   
        {relateProducts.map(productsItem => (
          <ListGroup.Item>
            <Link to={`/products/${productsItem.id}`} >
              <img 
              src={productsItem.productImgs?.[0]} alt="" 
              className='img-fluid' 
              style={{heigth: 100, width:200}}/>
              <h4>{productsItem.title}</h4>
              <p>Price</p>
              <p><b>{productsItem.price}</b></p>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>



    </div>
  );
};

export default ProductsDetail;