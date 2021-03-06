import React from 'react'
import  {Nav,Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


function Navbar1() {
    return (

<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Mason Burke's Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="projects">Projects</Nav.Link>
      <Nav.Link href="contact">Contact</Nav.Link>
      <Nav.Link href="resume">Resume</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>

    )
}

export default Navbar1