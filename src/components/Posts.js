import React, { Component } from 'react';
import './grid.scss';
import Post from './Post';


class Posts extends Component {


  render() {
    let news = this.props.news.map((news) => {
			return <Post key={news.id} info={news} />
		});

    return (
      <section>
          <div className="grid">
              { news }
          </div>
      </section>
    );
  }
}

export default Posts;
