import React, { Component } from 'react';

import Filters from './Filters';


class Aside extends Component {
  render() {
    return (
      <aside>
          <div className="grid">
            <div className="gitem-lg-12">
              <Filters setFilter={this.props.setFilter} />
            </div>
          </div>
      </aside>
    );
  }
}



export default Aside;
