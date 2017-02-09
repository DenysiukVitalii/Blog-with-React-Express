import React, { Component } from 'react';

class BlogFilters extends Component {


  render () {

    //console.log(this.props.state);
      return (
        <div>
          <p>Фильтр:<br />
            <label htmlFor="date">
              <input type="radio" name="filter" value="newest" id="date" onChange={this.props.setDate} defaultChecked/>
              По новизне
            </label>
            <br />
            <label htmlFor="popular">
              <input type="radio" name="filter" value="popular" id="popular" onChange={this.props.setPopular}/>
              По популярности
            </label>
          </p>
        </div>
      );
  }
}

export default BlogFilters;
