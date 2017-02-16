import React, { Component } from 'react';

import './grid.css';
import './post.css';
import './PageNews.css';

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
          <div className="PageNews">
		      	<div>
					<p className="title">{ this.state.title }</p>
					<div>
						<div className="bg-wrap"></div>
						<img src={ this.state.image } alt="news"></img>
						<p className="stats">
							<span className="views">
								<span className="n-views">{ this.state.views }</span>
							</span>
							<time dateTime={ this.state.date }>{ this.state.date }</time>
						</p>
					</div>
		      		<p className="news-desc" dangerouslySetInnerHTML={{__html: this.state.describe}}></p>
		      	</div>
	      	</div>
         );
     }
}

export default PageNews;
