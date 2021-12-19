

import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
// import { useState } from "react";
// import { storage } from "./firebase";
import { Container , Navbar , NavDropdown , Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "../src/Component/WebAdmin/Login"
import BranchM from "../src/Component/WebAdmin/BranchManager"
import Admin from "../src/Component/WebAdmin/Dashboard"
function App() {
  

  return (
    <div className="App">

{/* <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link> */}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */} 



            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main">Kahana Sub Ke Liye</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <li >
                                <Link to="/admin" className="nav-itms">Dashboard</Link>
                            </li>

                            <li>
                                <Link to="/Branchm" className="nav-itms">Update Branch Manager</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      










    <Router>
       <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/Branchm">
            <BranchM />
          </Route>
        </Switch>
        </Router>


<br/>
  
    </div>

  );
}

export default App;
