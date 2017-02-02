import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Sidebar';
import NewsContainer from '../containers/NewsContainer'

class App extends Component {


  render() {
    return (

      <div className="App">
        <Header></Header>
        <div className="grid container">
          <div className="gitem-lg-9">
            <NewsContainer />
          </div>
          <div className="gitem-lg-3">
            <Aside />
          </div>
        </div>
        <Footer />
     </div>
    );
  }
}

export default App;
