import React, { Component } from 'react';

import FilterBlog from './../containers/FilterBlog';
import FilterNews from './../containers/FilterNews';

class Aside extends Component {
  render() {
    return (
      <aside>
          <div className="grid">
            <div className="gitem-lg-12">

            { this.props.path === '/' && <FilterBlog /> }
				    { this.props.path === '/news' && <FilterNews /> }

            </div>
          </div>
      </aside>
    );
  }
}



export default Aside;
