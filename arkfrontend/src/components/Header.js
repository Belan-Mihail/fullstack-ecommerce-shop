import React from "react";
import { Navbar, Nav, Container, NavDropdown, NavLink } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" LinkContainer>
            <Navbar.Brand>Marke</Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/">
                <Nav.Link>
                  <i className="fas fa-home"></i> Home
                </Nav.Link>
              </NavLink>

              <NavLink to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Einkaufskorb
                </Nav.Link>
              </NavLink>
              
                <NavDropdown id="username">
                  <NavLink to="/profile">
                    <NavDropdown.Item>Profil</NavDropdown.Item>
                  </NavLink>

                  <NavDropdown.Item>
                    Ausloggen
                  </NavDropdown.Item>
                </NavDropdown>
              
                <NavLink to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Einloggen
                  </Nav.Link>
                </NavLink>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
