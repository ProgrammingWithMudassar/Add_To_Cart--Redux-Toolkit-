import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './Join.css'

const Join = () => {

  const { cartTotalQuantity } = useSelector((state) => state.cart)

  return (
    <Navbar bg="dark" style={{ width: '100%' }}>
      <Container >
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand href="#home" style={{ color: "white" }}>Online-Shopping</Navbar.Brand>
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <Nav className="justify-content-end flex-grow-1 pe-3" style={{ color: "white" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>
            <span className='store_number'>{cartTotalQuantity}</span>
          </Nav>
        </Link>
        <div className="account">
          <Link to='Login' style={{ textDecoration: 'none',color:"white" }}>
            <p>Login</p>
          </Link>
          <Link to="Register" style={{ textDecoration: 'none' ,color:"white"}}>
            <p>Register</p>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default Join





