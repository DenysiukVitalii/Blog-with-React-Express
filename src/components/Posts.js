import React, { Component } from 'react';
import './grid.scss';
import Post from './Post';
import BlogCard from './BlogCard';


class Posts extends Component {


  render() {
    let cards;

    if (this.props.type === 'blog') {
			cards = this.props.news.map((news) => {
				return <BlogCard key={news.id} info={news} />
			});
		} else if (this.props.type === 'news') {
			cards = this.props.news.map((news) => {
				return <Post key={news.id} info={news} />
			});
		}

    return (
      <section>
          <div className="grid">
              { cards }
          </div>
      </section>
    );
  }
}

export default Posts;
