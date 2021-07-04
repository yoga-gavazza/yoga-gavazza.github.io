import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navbar.css'
import logo from '../assets/logo.svg'

export default function Appnav() {
    return (<Navbar id='nav' expand="lg">
        <Navbar.Brand href="/"><img id='logo' src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Navbar.Text>
                <Nav className="mr-auto">
                    <Navbar>
                        <Link to="/" className='nav-text'> Novidades</Link>
                    </Navbar>
                    <Navbar>
                        <Link to="/about" className='nav-text'>Contato </Link>
                    </Navbar>
                </Nav></Navbar.Text>
        </Navbar.Collapse>
    </Navbar>)
}