import React, { Component } from 'react';
import './Header.sass';
import './grid.scss';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="grid container">
            <div className="gitem-lg-3"></div>
          </div>
      </header>
    );
  }
}

export default Header;
