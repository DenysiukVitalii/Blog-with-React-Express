import React, { Component } from 'react';
import './grid.scss';
import './post.scss';


class BlogCard extends Component {

  render() {
        return (

            <div className="gitem-lg-2 post">
             <div className="post">

                <div className="grid">
                  <div className="gitem-lg-12">
                    <img src={this.props.info.image} className="imgPost" alt=""/>
                  </div>
                </div>

                <div className="grid post-info">
                  <div className="gitem-lg-6">
                    <span className="review">{this.props.info.views}</span>
                  </div>
                  <div className="gitem-lg-6 text-right">
                    <time className="date" dateTime={ this.props.info.date }>{ this.props.info.date }</time>
                  </div>
                </div>

                <div className="grid">
                  <div className="gitem-lg-12">
                    <a href="" className="post-text">{this.props.info.header}</a>
                  </div>
                </div>

             </div>
          </div>

        );
  }
}

export default BlogCard;
