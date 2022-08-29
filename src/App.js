
import './App.css';
import  React , { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import JsonData from './data/data.json';
import SoftwareData from './data/softwareLink.json';
import { About } from './components/About';

import {BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './components/Home';
import Software from './components/Software';
  
const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JsonData);
    
  }, []);

  return (
    <div className='App'>
      <div className='App-header'>
      <Router>
    <Navbar className='nav-container' variant="light"    expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src="https://raw.githubusercontent.com/X-workzDev01/xworkzwebsite/master/src/main/webapp/assets/images/Logo.png" width="100" height="50" alt='Xworkz'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
            <Nav.Link as={Link} to="/softwares">softwares</Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
   
    
    <Route path="/about" element={<About value={JsonData}/>}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/softwares" element={<Software value={SoftwareData} />}/>
    
    
  </Routes>

</Router>


      </div>
    


    </div>
  );
};

export default App;
