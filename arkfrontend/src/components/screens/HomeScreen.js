import React from 'react'
import {Row,Col} from "react-bootstrap";
import Product from '../Product';
import products from '../../products';


function HomeScreen() {
  return (
    <div>
        <h1 className="text-center">Neuheiten</h1>
        <Row>
            {products.map((product) => (
                <Col key={product._id} sd={12} md={4} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen

//15 maping products and give Product.js component product prop - go to Product.js