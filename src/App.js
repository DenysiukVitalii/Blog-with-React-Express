import React, { Component } from 'react';
import './App.css';


import Header from './Header';
import Footer from './Footer'; 
import Posts from './Posts';
import Aside from './Sidebar';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {sortBy: "date"};
      this.handleFilter = this.handleFilter.bind(this);
      this.getTypeSort = this.getTypeSort.bind(this);
  }

  handleFilter(value) {
      this.setState({sortBy: value});
  }

  getTypeSort() {
      return this.state.sortBy;
  }

  render() {
    return (

      <div className="App">
        <Header></Header>
        <div className="grid container">
          <div className="gitem-lg-9">
            <Posts getTypeSort={this.getTypeSort}/>
          </div>
          <div className="gitem-lg-3">
            <Aside setFilter={this.handleFilter}/>
          </div>
        </div>
        <Footer />
     </div>
    );
  }
}

export default App;
