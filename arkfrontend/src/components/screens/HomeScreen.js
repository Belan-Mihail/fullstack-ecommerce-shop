import React, {useState, useEffect} from 'react'
import {Row,Col} from "react-bootstrap";
import Product from '../Product';
import products from '../../products';
import axios from 'axios'


function HomeScreen() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchProducts() {
      const {data} = await axios.get('https://8000-belanmihail-fullstackec-ci6uctlp6k1.ws-eu110.gitpod.io/api/products/')
      setProducts(data)
      console.log(data)
      console.log(products)
    }
    fetchProducts()
  }, [])

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
//36 import useState and useEffect go to backend and pip install django-cors-headers
// add "corsheaders" to install apps and add "corsheaders.middleware.CorsMiddleware",
    // "django.middleware.common.CommonMiddleware",
    // add CORS_ALLOW_ALL_ORIGINS = True to settings