import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterHeadlineThunk, filterProductsThunk, getNewsThunk } from '../store/slices/news.slice';
import InputGroup from 'react-bootstrap/InputGroup';



const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const [categoriesList, setCategoriesList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    dispatch(getNewsThunk());
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then(res => setCategoriesList(res.data.data.categories));
  }, [])

  console.log(categoriesList);

  return (
    <div>
      <Row>
        <Col lg={3}>
          <ListGroup>
            {
              categoriesList.map(category => (
                <ListGroup.Item
                  key={category.id}
                  onClick={() => dispatch(filterProductsThunk(category.id))}
                  style={{ cursor: "pointer" }}
                >
                  {category.name}
                </ListGroup.Item>

              ))
            }
          </ListGroup>

        </Col>
        <Col lg={9}>
          <h1>Componente Home</h1>


          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={inputSearch}
              onChange={e => setInputSearch(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(filterHeadlineThunk(inputSearch))}
            >
              Search
            </Button>
          </InputGroup>

          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map(productsItem => (
              <Col key={productsItem.id}>
                <Card >
                  <Link to={`/products/${productsItem.id}`} style={{textDecoration: "none"}}>
                    <Card.Img
                      variant="top"
                      src={productsItem.productImgs?.[0]}
                      style={{ height: 100, objectFit:"contain" }}
                    />
                    <Card.Body>
                      <Card.Title>{productsItem.title}</Card.Title>
                      <Card.Text>
                        {productsItem.price}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>

            ))}
          </Row>
        </Col>
      </Row>

    </div>
  );
};

export default Home;