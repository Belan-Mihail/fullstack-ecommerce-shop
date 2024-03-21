import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./styles/Header.css";
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  // return (
  //   <div>
  //     <Navbar bg="dark" variant="dark">
  //       <Container className="NavContainer">
  //       <Link to="/" className="NavLinks">
  //       <Navbar.Brand>A.R.K</Navbar.Brand>
  //       </Link>

  //         <Navbar.Toggle aria-controls="navbarScroll" />
  //         <Navbar.Collapse id="navbarScroll">
  //           <Nav
  //             className="mr-auto my-2 my-lg-0"
  //             style={{ maxHeight: "100px" }}
  //             navbarScroll
  //           >
  //             <Link to="/" className="NavLinks">
  //                 <i className="fas fa-home"></i> Home
  //             </Link>

  //             <Link to="/cart" className="NavLinks">
  //                 <i className="fas fa-shopping-cart"></i> Einkaufskorb
  //             </Link>

  //               <NavDropdown id="username">
  //                 <Link to="/profile" className="NavLinks">
  //                   <NavDropdown.Item>Profil</NavDropdown.Item>
  //                 </Link>

  //                 <NavDropdown.Item>
  //                   Ausloggen
  //                 </NavDropdown.Item>
  //               </NavDropdown>

  //               <Link to="/login" className="NavLinks">
  //                   <i className="fas fa-user"></i> Einloggen
  //               </Link>

  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   </div>
  // );
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/" >
            <Navbar.Brand>A.R.K</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fas fa-home"></i> Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>

                <NavDropdown id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>

                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Login
                  </Nav.Link>
                </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

//21 import { LinkContainer } from 'react-router-bootstrap'

// 4:05
