import React, { Component } from 'react';

class optionSelect extends Component {
    render() { 
        const {id, name} = this.props.moneda
        return ( 
            <option value={id}>
                {name}
            </option>
         );
    }
}
 
export default optionSelect;