import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { searchProduct } from '../Redux/productSlice';
import { useDispatch } from 'react-redux';
import { MdOutlineLocalGroceryStore, MdOutlineMenu, MdClose } from "react-icons/md";

function Header({ insidehome }) {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5" style={{ zIndex: '1000' }}>
      <Container className='d-flex align-items-center'>
        <div className='w-100 d-flex justify-content-between'>
          <Navbar.Brand>
            <Link to={'/'} className='text-decoration-none d-flex align-items-center' style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
              <MdOutlineLocalGroceryStore /> &nbsp;
              Fusion Store
            </Link>
          </Navbar.Brand>

          {/* Custom Toggle Button */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className='float-right border border-0' 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose style={{ color: "white", fontSize: "24px" }} /> 
                      : <MdOutlineMenu style={{ color: "white", fontSize: "24px" }} />}
          </Navbar.Toggle>
        </div>

        <div className='d-flex justify-content-evenly'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {insidehome && (
                <Nav.Link>
                  <input onChange={(e) => dispatch(searchProduct(e.target.value))} type="text" style={{ width: '400px' }} className='form-control rounded p-2' placeholder='Search products...' />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
