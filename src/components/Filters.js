import React, {Component} from 'react';
import classnames from 'classnames';

class Filters extends Component {
    state = {
        active: false,
        types: [{name: 'By date', color: 'red', func: 'setDate'},
                {name: 'By views', color: 'purple', func: 'setPopular'},
                {name: 'By alphabet', color: 'blue', func: 'setAlphabet'}],
        selectedType: {name: 'By date', color: 'red', func: 'setDate'}
    }

    handleClick = () => {
       this.state.active ? this.setState({ active: false }) : this.setState({ active: true });
    }
    
    handleSelect = (item) => {
       this.setState({ selectedType: item });
       this.props[item.func].call(this);
    }

    render() {
        return (
            <div className={classnames('ui floating dropdown labeled icon button',
                 {active: this.state.active})} onClick={this.handleClick}>
                <i className="filter icon"></i>
                <span className="text">
                {this.state.selectedType.color ? 
                    <div className={classnames('ui empty circular label', {[this.state.selectedType.color]: true})}></div> : 
                                    <div></div> }
                    {this.state.selectedType.name}
                </span>
                <div className={classnames('menu transition', {visible: this.state.active})}>
                    <div className="scrolling menu">
                        {
                            this.state.types.map(filter => (
                                <div key={filter.name} className={classnames('item')} 
                                     onClick={() => this.handleSelect(filter)}>
                                    <div className={classnames('ui red empty circular label', filter.color)}></div>
                                    {filter.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters;