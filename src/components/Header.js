import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';
import './grid.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">Blog</Link>
        <Link to="/news">News</Link>
        <Link to="/admin">Admin</Link>
      </header>
    );
  }
}

export default Header;
