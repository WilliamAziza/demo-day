// import React from 'react';
// import { useCart } from './CartContext';
// import { Card, Button, Container, Col, Row } from 'react-bootstrap';
// import { images } from './images';

// const Products = () => {
//   const { cart, setCart } = useCart();

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const imageStyle = {
//     width: '260px', 
//     height: '200px',
//   };

//   return (
//     <Container>
//       <Row>
//         <h1>Get Some Of Our Products</h1>
//         <Col md="3" style={{ margin: '1rem' }}>
//           <Card>
//             <Card.Img variant="top" src={images.top1} style={imageStyle} />
//             <Card.Body>
//               <Card.Title>Kaba And Slit</Card.Title>
//               <Card.Text>GHC 50</Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => addToCart({ name: 'Kaba And Slit', price: 50 })}
//               >
//                 Add to Cart
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md="3" style={{ margin: '1rem' }}>
//           <Card>
//             <Card.Img variant="top" src={images.top2} style={imageStyle} />
//             <Card.Body>
//               <Card.Title>Straight Dress</Card.Title>
//               <Card.Text>GHC 70</Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => addToCart({ name: 'Straight Dress', price: 70 })}
//               >
//                 Add to Cart
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md="3" style={{ margin: '1rem' }}>
//           <Card>
//             <Card.Img variant="top" src={images.top2} style={imageStyle} />
//             <Card.Body>
//               <Card.Title>Straight Dress</Card.Title>
//               <Card.Text>GHC 70</Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => addToCart({ name: 'Straight Dress', price: 70 })}
//               >
//                 Add to Cart
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//          <Col md="3" style={{ margin: '1rem' }}>
//           <Card>
//             <Card.Img variant="top" src={images.top2} style={imageStyle} />
//             <Card.Body>
//               <Card.Title>Straight Dress</Card.Title>
//               <Card.Text>GHC 70</Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => addToCart({ name: 'Straight Dress', price: 70 })}
//               >
//                 Add to Cart
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//          <Col md="3" style={{ margin: '1rem' }}>
//           <Card>
//             <Card.Img variant="top" src={images.top2} style={imageStyle} />
//             <Card.Body>
//               <Card.Title>Straight Dress</Card.Title>
//               <Card.Text>GHC 70</Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => addToCart({ name: 'Straight Dress', price: 70 })}
//               >
//                 Add to Cart
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Products;



// import React from 'react'
// import { Card, Button } from 'react-bootstrap';
// import { images } from './images';
// import { useCart } from './CartContext';
// import "../styles.css";

// const Products = () => {

//   const { cart, setCart } = useCart();

//    const addToCart = (product) => {
//      setCart([...cart, product]);
//    };

//   return (
//     <>
//     <h2 className='producthead'>Products</h2>
//     <div className='productcontainer'>
//       <Card className='card'>
//              <Card.Img variant="top" src={images.top1}  />
//              <Card.Body>
//                <Card.Title>Kaba And Slit</Card.Title>
//                <Card.Text>GHC 50</Card.Text>
//                <Button
//                  variant="primary"
//                  onClick={() => addToCart({ name: 'Kaba And Slit', price: 50 })}
//               >
//                  Add to Cart
//                </Button>
//              </Card.Body>
//            </Card>
//     </div>
      
//     </>
//   )
// }

// export default Products;






// import {useEffect,useState} from 'react'
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';
// import { images } from './images';
// import { useCart } from './CartContext';
// import "../styles.css";

// const productAPI = "http://localhost:4000/wears";


// const Products = () => {
//    const [things, setThings] = useState([]);

//   useEffect(() => {
//     const getproducts = async() => {
//       const resposnse = await axios.get(productAPI);
//       setThings(resposnse.data)
//     }
//     getproducts();
//   },[]);

//   const { cart, setCart } = useCart();

//    const addToCart = (product) => {
//      setCart([...cart, product]);
//    };

//   return (
//     <>
//     <h2 className='producthead'>Products</h2>
//     <div className='productcontainer'>
//       {things.map((dress) => {
//         return (
//           <>
//           <Card className='card'>
//              <Card.Img variant="top" src={images.top1}  />
//              <Card.Body>
//                <Card.Title>{dress.Title}</Card.Title>
//                <Card.Text>{dress.price}</Card.Text>
//                <Button
//                  variant="primary"
//                  onClick={() => 
//                   addToCart({ name: `{dress.Title}`, price: `{dress.price}` })}
//               >
//                  Add to Cart
//                </Button>
//              </Card.Body>
//            </Card>
//           </>
//         );
//       })}
      
//     </div>
//     </>
//   )
// }
// export default Products;


































import {useEffect,useState} from 'react'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
// import { images } from './images';
import { useCart } from './CartContext';
import "../styles.css";

const productAPI = "https://fakestoreapi.com/products";
console.log(productAPI)


const Products = () => {
   const [things, setThings] = useState([]);
   const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getproducts = async() => {
      const resposnse = await axios.get(productAPI);
      // console.log(resposnse);
      setThings(resposnse.data)
      setLoading(false);
    }
    getproducts();
  },[]);

  const { cart, setCart } = useCart();

   const addToCart = (product) => {
     setCart([...cart, product]);
   };

  return (
    <>
    <h2 className='producthead'>Products</h2>
    <div className='productcontainer'>
    {loading && <div className='loading'>Loading...</div> }
      {things.map((dress) => {
        return (
          <>
          <Card className='card' key={dress.id}>
             <Card.Img variant="top" className='cardimage' src={dress.image}/>
             <Card.Body>
               <Card.Title className='cardtitle'>{dress.title}</Card.Title>
               <Card.Text className='cardprice'>GHC{dress.price}</Card.Text>
               <Button
                 variant="primary"
                 onClick={() => 
                  addToCart({ name: `{dress.Title}`, price: `{dress.price}` })}
              >
                 Add to Cart
               </Button>
             </Card.Body>
           </Card>
          </>
        );
      })}
      
    </div>
      
    </>
  )
}

export default Products;


