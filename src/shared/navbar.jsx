import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navbar.css'
import logo from '../assets/logo-lado.svg'

export default function Appnav() {
    return (<Navbar id='nav' expand="md">
        <Navbar.Brand href="/"><Image id='logo' rounded src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Navbar.Text>
                <Nav className="me-auto">
                    <Navbar>
                        <Link to="/" className='nav-text'> Novidades</Link>
                    </Navbar>
                    <Navbar>
                        <Link to="/about" className='nav-text'>Contato </Link>
                    </Navbar>
                </Nav>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
    )
}