import React, { Component } from 'react';

import FilterNews from '../containers/FilterNews';

class Aside extends Component {
  render() {
    return (
      <aside>
          <div className="grid">
            <div className="gitem-lg-12">
              <FilterNews setFilter={this.props.setFilter} />
            </div>
          </div>
      </aside>
    );
  }
}



export default Aside;
