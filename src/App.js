import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { MyRouter } from './router/MyRouter';
import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Router>
          <MyRouter></MyRouter>
        </Router>
      </Container>
    );
  }
}

export default App;
