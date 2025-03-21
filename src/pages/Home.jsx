import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { fetchProducts, setCategory } from '../Redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from '../components/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineLocalGroceryStore } from "react-icons/md";


function Home() {
    const { allProducts, pending, selectedCategory, dummyAllProducts } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Extract unique categories from dummyAllProducts (full list, not filtered)
    const uniqueCategories = ["All", ...new Set(dummyAllProducts.map(item => item.category))];

    const [currentPage, setCurrentPage] = useState(1);
    const cardPerPage = 6;
    const endingIndex = currentPage * cardPerPage;
    const startingIndex = endingIndex - cardPerPage;

    // Filter products based on selected category
    const filteredProducts = selectedCategory === "All"
        ? allProducts
        : allProducts.filter(product => product.category === selectedCategory);

    // Get current products for pagination
    const currentProducts = filteredProducts.slice(startingIndex, endingIndex);

    return (
        <>
            <Header insidehome={true} />

            {pending ? (
                <div className='text-center mt-5 fw-bolder'>
                    <Spinner animation="border" variant="secondary" />
                </div>
            ) : (
                <div className='pt-5'>
                    <Row className='container-fluid p-5 m-auto mt-5'>
                        {/* Category Filter Dropdown */}
                        <div className="container mt-4 text-start">
                            <h5>Filter by Category:</h5>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    {selectedCategory || "Select Category"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {uniqueCategories.map((category, index) => (
                                        <Dropdown.Item key={index} onClick={() => {
                                            dispatch(setCategory(category));
                                            setCurrentPage(1); // Reset to first page on category change
                                        }}>
                                            {category}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        {currentProducts.length > 0 ? (
                            currentProducts.map(products => (
                                <Col sm={12} md={6} lg={4} className='my-2 d-flex justify-content-center align-items-center' key={products.id}>
                                    <Card style={{ width: '16rem', height: '22rem' }}>
                                        <Card.Img variant="top" style={{ width: '15rem', height: '15rem' }} src={products?.image} />
                                        <Card.Body>
                                            <Card.Title className='text-center'>{products?.title.slice(0, 11)}...</Card.Title>
                                            <div className='text-center'><Link to={`/view/${products?.id}`} className='text-primary text-decoration-none fw-bold'>Product Details</Link></div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <div className='text-danger text-center fw-bold mt-4'>No products found</div>
                        )}
                    </Row>
                </div>
            )}

            {filteredProducts.length > 0 && (
                <Pagination totalProducts={filteredProducts.length} cardsPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            )}
        </>
    );
}

export default Home;
