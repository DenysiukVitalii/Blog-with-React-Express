import React, { Component } from 'react';
import PageNews from '../components/PageNews';

class PageNewsContainer extends Component {

    render() {
        return (
        	<div>
    			 <PageNews postId={this.props.params.postId}/>
  			  </div>
        );
    }
}


export default PageNewsContainer; 
