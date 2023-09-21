import { NavLink } from 'react-router-dom';
import { Col, Container, Navbar, Nav, Row } from 'react-bootstrap';

export default function NavBar() {
    
    return (
        <Navbar expand="lg">
            <Nav>
                <Nav.Link as={NavLink} to="/views"> Views </Nav.Link>
                <Nav.Link as={NavLink} to="/contact"> Contacts </Nav.Link>
            </Nav>
        </Navbar>
    )
}