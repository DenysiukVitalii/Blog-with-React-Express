import React, { Component } from 'react';
import './Header.sass';
import './grid.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="grid">
          <div className="gitem-lg-6"></div>
        </div>
      </header>
    );
  }
}

export default Header;
