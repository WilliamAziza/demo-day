import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { images } from './images';

const Products = ({ addToCart }) => {
  // Sample product data, you can add more products here
  const products = [
    {
      id: 1,
      name: 'Kaba and Slit',
      price: 'GHC 50',
      image: images.top1,
    },
    {
      id: 2,
      name: 'Men\'s Suit',
      price: 'GHC 120',
      image: images.suit,
    },
    {
      id: 3,
      name: 'Women\'s Dress',
      price: 'GHC 80',
      image: images.dress,
    },
    // Add more products here...
  ];

  return (
    <Container>
      <Row>
        <h1>Get Some of Our Amazing Products</h1>
      </Row>
      <Row>
        {products.map((product) => (
          <Col md='3' key={product.id} style={{ margin: '2rem' }}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.price}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => addToCart(product)} // Add the product to the cart
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
