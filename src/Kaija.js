import React, { Component } from 'react';

class Kaija extends Component{
    render() {
        console.log(this.props);
        const { name, age, color } = this.props;
        return(
            <div className="unicorn">
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <div>Color: { color }</div>
            </div>
        )
    }
}

export default Kaija