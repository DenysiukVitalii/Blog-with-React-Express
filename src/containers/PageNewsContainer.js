import React, { Component } from 'react';
import PageNews from '../components/PageNews';

class PageNewsContainer extends Component {

  getPostById = (id) => {
		var myHeaders = new Headers({
		    "Content-Type": "json/plain",
		    "X-Custom-Header": "ProcessThisImmediately",
		});


		return fetch(`http://localhost:9000/posts/${id}`,{ method: 'GET',
               mode: 'cors',
               cache: 'default' })
      	.then(response => response.json())
	};


    render() {
        return (
        	<div>
    			 <PageNews postId={this.props.params.postId} getPostById={this.getPostById}/>
  			  </div>
        );
    }
}


export default PageNewsContainer;
