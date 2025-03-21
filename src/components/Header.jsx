import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { searchProduct } from '../Redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineLocalGroceryStore } from "react-icons/md";



function Header({ insidehome }) {
  const userwishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  return (
    <>


      <Navbar expand="lg" className="bg-primary position-fixed  top-0 w-100 mb-5" style={{ zIndex: '1000' }} >
        <Container className='d-flex align-items-center' >
          <div className='w-100 d-flex justify-content-between'>
            <Navbar.Brand >
              <Link to={'/'} className=' text-decoration-none d-flex align-items-center' style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
              <MdOutlineLocalGroceryStore /> &nbsp;
                Fusion Store
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='float-right' />
          </div>
          <div className='d-flex justify-content-evenly'>
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto">

                {insidehome &&
                  <Nav.Link className='' >

                    <input onChange={(e) => dispatch(searchProduct(e.target.value))} type="text" style={{ width: '400px' }} className='form-control rounded p-2' placeholder='search  products...' />
                  </Nav.Link>}

                {/* <Nav.Link style={{ fontSize: '28px', fontWeight: 'bold' }} className='me-5 d-flex' >

                  <Link className=' text-decoration-none' style={{ color: 'rgb(238, 54, 54)' }} to={'/wishlist'}><i class="fa-solid fa-heart"><Badge style={{ fontSize: '10px', fontWeight: 'normal' }} bg="secondary">{userwishlist?.length}</Badge></i> </Link> &nbsp;
                  <Link className=' text-decoration-none' style={{ color: 'rgb(255, 216, 86)' }} to={'/cart'}> <i class="fa-solid fa-cart-shopping"><Badge style={{ fontSize: '10px', fontWeight: 'normal' }} bg="secondary">{userCart?.length}</Badge></i></Link>
                </Nav.Link> */}

              </Nav>


            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>




    </>
  )
}

export default Header
