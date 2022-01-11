import logo from './logo.svg';
import './App.css';
import Login from "./Authentication/login"
import Items from "./ItemManagement/Items"
import { Container, Navbar, Nav, Link, Brand } from 'react-bootstrap'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Items />} />
            <Route path="login" element={<Login />} />
          </Route>

        </Routes>
      </Router>
    </div>

  );
}

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Items</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        {/* <h1>child</h1> */}
        <Outlet />
      </Container>

    </>
  );
}

export default App;
