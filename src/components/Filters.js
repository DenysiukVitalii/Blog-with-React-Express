import React, { Component } from 'react';

class Filters extends Component {

  constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
  	}

	handleChange(e) {
		this.props.setFilter(e.target.id);
  }


  render () {
      return (
        <div>
          <p>Фильтр:<br />
            <label htmlFor="date">
              <input type="radio" name="filter" value="newest" id="date" onChange={this.handleChange}/>
              По новизне
            </label>
            <br />
            <label htmlFor="popular">
              <input type="radio" name="filter" value="popular" id="popular" onChange={this.handleChange}/>
              По популярности
            </label>
          </p>
        </div>
      );
  }
}

export default Filters;
