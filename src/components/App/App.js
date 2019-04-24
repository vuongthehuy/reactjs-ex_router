import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav></Nav>
          <div className="container" id="main-content">
            <RouterURL></RouterURL>
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
