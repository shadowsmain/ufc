import {Container, Nav, Navbar} from "react-bootstrap/esm";
import {NavLink as Link} from "react-router-dom";
import React from "react";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link>
                        <Link to={"/"}>Main</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/users"}>Users</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/projects"}>Projects</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/tasks"}>Tasks</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    )
}

export default Header;