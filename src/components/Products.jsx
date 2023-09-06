import React from 'react';
import { useCart } from './CartContext';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { images } from './images';

const Products = () => {
  const { cart, setCart } = useCart();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const imageStyle = {
    width: '260px', 
    height: '200px',
  };

  return (
    <Container>
      <Row>
        <h1>Get Some Of Our Products</h1>
        <Col md="3" style={{ margin: '1rem' }}>
          <Card>
            <Card.Img variant="top" src={images.top1} style={imageStyle} />
            <Card.Body>
              <Card.Title>Kaba And Slit</Card.Title>
              <Card.Text>GHC 50</Card.Text>
              <Button
                variant="primary"
                onClick={() => addToCart({ name: 'Kaba And Slit', price: 50 })}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" style={{ margin: '1rem' }}>
          <Card>
            <Card.Img variant="top" src={images.top2} style={imageStyle} />
            <Card.Body>
              <Card.Title>Straight Dress</Card.Title>
              <Card.Text>GHC 70</Card.Text>
              <Button
                variant="primary"
                onClick={() => addToCart({ name: 'Straight Dress', price: 70 })}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3" style={{ margin: '1rem' }}>
          <Card>
            <Card.Img variant="top" src={images.top2} style={imageStyle} />
            <Card.Body>
              <Card.Title>Straight Dress</Card.Title>
              <Card.Text>GHC 70</Card.Text>
              <Button
                variant="primary"
                onClick={() => addToCart({ name: 'Straight Dress', price: 70 })}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
         <Col md="3" style={{ margin: '1rem' }}>
          <Card>
            <Card.Img variant="top" src={images.top2} style={imageStyle} />
            <Card.Body>
              <Card.Title>Straight Dress</Card.Title>
              <Card.Text>GHC 70</Card.Text>
              <Button
                variant="primary"
                onClick={() => addToCart({ name: 'Straight Dress', price: 70 })}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
         <Col md="3" style={{ margin: '1rem' }}>
          <Card>
            <Card.Img variant="top" src={images.top2} style={imageStyle} />
            <Card.Body>
              <Card.Title>Straight Dress</Card.Title>
              <Card.Text>GHC 70</Card.Text>
              <Button
                variant="primary"
                onClick={() => addToCart({ name: 'Straight Dress', price: 70 })}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
