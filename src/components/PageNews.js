import React, { Component } from 'react';

import './grid.css';
import './post.css';

class PageNews extends Component {
  constructor(props) {
    	super(props);
    	this.state = {};
  	}

	componentDidMount(){
		this.props.getPostById(this.props.postId)
    		.then(json => this.setState(json) );
	}
    render() {
        return (
          <div className="gitem-lg-2 post">
           <div className="post">

              <div className="grid">
                <div className="gitem-lg-12">
                  <img src={this.state.image} className="imgPost" alt=""/>
                </div>
              </div>

              <div className="grid post-info">
                <div className="gitem-lg-6">
                  <span className="review">{this.state.views}</span>
                </div>
                <div className="gitem-lg-6 text-right">
                  <time className="date" dateTime={ this.state.date }>{ this.state.date }</time>
                </div>
              </div>

              <div className="grid">
                <div className="gitem-lg-12">
                  <a href="" className="post-text">{this.state.header}</a>
                </div>
              </div>

           </div>
        </div>
         );
     }
}

export default PageNews;
