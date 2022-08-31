import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function TopBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img
            style={{ height: "30px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Instacart_logo_and_wordmark.svg/1280px-Instacart_logo_and_wordmark.svg.png"
            alt="instacart logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Nav style={{ display: "flex" }}>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;
