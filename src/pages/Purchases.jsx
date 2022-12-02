import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();

  const purchases = useSelector(state => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div>
      <ListGroup>
      {
        purchases.map(purchases => (
          <li>
            {purchases.cart.products.map(products => (
              
              <li>
                <Link to={`/products/${products.id}`}>
                  <ListGroup.Item><b>Product :</b>{products.title}</ListGroup.Item>
                  <ListGroup.Item><b>Price: </b>{products.price}</ListGroup.Item>
                  <ListGroup.Item><b>Purchases Date: </b>{products.createdAt}</ListGroup.Item>
                </Link>
              </li>
            ))}
          </li>
        ))
      }
      
    </ListGroup>
  
    </div>
  );
};

export default Purchases;