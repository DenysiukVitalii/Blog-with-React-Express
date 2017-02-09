import React, { Component } from 'react';

class NewFilters extends Component {


  render () {
    return (
        <div>
          <p>Фильтр:<br />
            <label htmlFor="date">
              <input type="radio" name="filter" id="time" onChange={this.props.setNews} defaultChecked/>
              Time
            </label>
            <br />
            <label htmlFor="popular">
              <input type="radio" name="filter" id="the-guardian-uk" onChange={this.props.setNews}/>
              The Guardian
            </label>
          </p>
        </div>
      );
  }
}

export default NewFilters;
