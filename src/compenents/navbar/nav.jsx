
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link  } from "react-router-dom";
import './nav.scss';
import React,{ useState } from "react";

const NavigationBar = () => {
  const [city, setCity] = useState("");
  return (
    <Navbar bg="light" expand="lg" className="d-flex justify-content-around" style={{ width: '100%' }}>
      <Navbar.Brand href="#home" className="pl-2 d-flex justify-content-center" style={{ width: '10%' }}>Weather 4U</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
        <Nav className="mr-auto d-flex justify-content-around" style={{ width: '50%' }}>
          <Link to="/" className="Link">Home</Link>
          {/* <Link to="/Weather" className="Link">Weather</Link> */}
          <Link to="/About" className="Link">About</Link>
        </Nav>
        <Form inline className="d-flex justify-content-around" style={{ width: '40%' }}>
          <FormControl type="text" placeholder="City Here" className="mr-sm-2" style={{ width: '70%' }} value={city} onChange={(e) => setCity(e.target.value)}/>
          <Link to={`/weather/${city}`}>
            <Button variant="outline-primary">Search</Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;