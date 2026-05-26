import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar2() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        {/* Logo / Brand */}
        <Navbar.Brand href="#home">
          Complaint Box
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              Features
            </Nav.Link>

            <Nav.Link href="#contact">
              Contact
            </Nav.Link>

            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action1">
                Action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action2">
                Another Action
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action3">
                Something Else
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right Side Links */}
          <Nav>
            <Nav.Link href="#complaints">
              More Complaints
            </Nav.Link>

            <Nav.Link href="#user">
              User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;