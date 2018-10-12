import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import ImgCarousel from './ImgCarousel/ImgCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ImgCarousel/>

      </div>
    );
  }
}

export default App;
