import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [resPerPage, setResPerPage] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/products?page=${currentPage}&limit=${resPerPage}`);
        setProducts(response.data.products);
        console.log(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <h1>All Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} md={4}>
            <div className="product-item">
              <img src={product.images[0].url} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ₱{product.price}</p>
            </div>
          </Col>
        ))}
      </Row>
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        <button onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
      </div>
    </Container>
  );
};

export default Products;
