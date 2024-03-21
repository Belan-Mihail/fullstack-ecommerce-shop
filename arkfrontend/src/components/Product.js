import React from 'react'
import { Card } from "react-bootstrap";
import Rating from './Rating';
import { Link } from 'react-router-dom'


function Product({product}) {
    return (
        <Card classname="my-3 p-3 rounded">
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} />
          </Link>
    
          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
    
            <Card.Text as="div">
                <div className="my-3">
                    {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>
            
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
    
            <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    color={"#f8e825"}
                  />
          </Card.Body>
        </Card>
      );
}

export default Product

//13 rfce and go app js
//16 add jsx (wothout ratings and link). create Rating.js in components and go to it
//18 give value,text,color props to Rating component
//19 instal react router dom and npm install -S react-router-bootstrap - go app.js
//21 change <a> to Link and import { Link } from 'react-router-bootstrap'

// 3:59:00