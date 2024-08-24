/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, Navbar, Nav, Offcanvas, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import './index.scss'
import Profile from './Profile'

function Navigation() {
  const [navbar, setNavbar] = useState(false)
  const [expand, setExpand] = useState(false)

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))

  const changeNavBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavBackground)

  return (
    <Navbar collapseOnSelect expand="lg" className={`naV ${navbar ? 'active' : ''}`}>
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <img
            alt=""
            src={require('../../assets/logo/png/logoOne.png')}
            width="180"
            height="150"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>

        <Navbar.Toggle onToggle={() => setExpand('md')} aria-controls={`offcanvasNavbar-expand-${expand}`}/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  KigaluXe
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                  <NavDropdown
                    title="Listings"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item onClick={() => navigate('/for_sale')}>Properties for Sale</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate('/for_rent')}>Properties for Rent</NavDropdown.Item>
                    <NavDropdown.Item  onClick={() => navigate('/all_properties')}>All Properties</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link href="#">About</Nav.Link>
                </Nav>
                {
                  user ? (
                    <Nav className="justify-content-end">
                      <Profile firstname={user.firstname} profileImg={user.profileImg}/>
                    </Nav>
                  ) : ''
                }
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Navigation