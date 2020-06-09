import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './List';
import { Button, Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <List data={[1,2,3,4]}></List>
      </Container>
    );
  }
}

export default App;
