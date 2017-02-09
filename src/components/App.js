import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Sidebar';

class App extends Component {


  render() {
    return (

      <div className="App">
        <Header></Header>
        <div className="grid container">
          <div className="gitem-lg-9">
            { this.props.children }

          </div>
          <div className="gitem-lg-3">
            <Aside path={this.props.location.pathname}/>
          </div>
        </div>
        <Footer />
     </div>
    );
  }
}

export default App;
