import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createCartThunk } from '../store/slices/cart.slice';
import { getNewsThunk } from '../store/slices/news.slice';

const ProductsDetail = () => {


  const { id } = useParams();

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  const productsList = useSelector(state => state.products);

  const producto = productsList.find(productsItem => productsItem.id === Number(id));

  const relateProducts = productsList.filter(productsItem => productsItem.category.id === producto.category.id &&
  productsItem.id !== producto.id
  
  )

  const [quantity, setQuantity] = useState();

  const addToCart = () => {
    const productsInCart = {
      id: producto.id,
      quantity: quantity
    }

    dispatch(createCartThunk(productsInCart))

  }



  return (
    <div>
      <Row >
        <Col lg={9}>
          <img src={producto?.productImgs?.[0]} alt="" className='im-fluid' style={{ width: 300 }} />
          <h1>{producto?.title}</h1>
          <b>{producto?.description}</b>
          <p>Precio: </p>
          <h3>{producto?.price}</h3>

        </Col>
        <Col lg={3} >
          <h2>Discover similar items</h2>
          <ListGroup variant="flush" className='list' >

            {relateProducts.map(productsItem => (
              <ListGroup.Item key={productsItem.id} >
                <Link to={`/products/${productsItem.id}`} >
                  <img
                    src={productsItem.productImgs?.[0]} alt=""
                    className='img-fluid'
                    style={{ heigth: 100, width: 200 }} />
                  <h4>{productsItem.title}</h4>
                  <p>Price:</p>
                  <p><b>{productsItem.price}</b></p>
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>



        </Col>


      </Row>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}

      />
      <Button onClick={addToCart}> Add to Cart</Button>


    </div>
  );
};

export default ProductsDetail;