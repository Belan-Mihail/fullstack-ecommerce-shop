import React from 'react'
import { Card } from "react-bootstrap";
import Rating from './Rating';


function Product({product}) {
    return (
        <Card classname="my-3 p-3 rounded">
          <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} />
          </a>
    
          <Card.Body>
            <a href={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </a>
    
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
//19 instal react router dom

// 3:59:00