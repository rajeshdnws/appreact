import React from 'react';
import AboutUs from './AboutUs'
import Contact from './Contact'
import Users from './Users'
import CreateUser from './CreateUser'
import Home from './Home'
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      {<Router>

        { <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link href="#pricing"><Link to="/list">User List</Link>
            </Nav.Link> <Nav.Link href="#pricing"><Link to="/create">Create User</Link>
            </Nav.Link>
          </Nav>
        </Navbar> }
        { <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
                   
          <Route path="/">
            <Home />
          </Route>
        </Switch> }
        </Router>}

    </div>
 
  );
}

export default App;
