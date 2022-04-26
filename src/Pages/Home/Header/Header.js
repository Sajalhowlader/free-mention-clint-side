import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import headerLogo from '../../../images/logo-1.png'
import '../../AllCss/AllCss.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav-container' >
                <Container >
                    <Navbar.Brand to="/">
                        <div className="d-flex">
                            <img width={40} height={40} src={headerLogo} alt="" />
                            <h2 className='ms-3 text-white'>FREE MENTION</h2>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto menu-link">
                            <Nav.Link className='text-white'>Home</Nav.Link>
                            <Nav.Link className='text-white'>Donation</Nav.Link>
                            <Nav.Link className='text-white'>Event</Nav.Link>
                            <Nav.Link className='text-white'>Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <button>SING IN</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;