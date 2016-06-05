'use strict';
import React from 'react';
import {Component} from 'react';

class FlightRow extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <tr>
            <td><span className="span-centered">{ this.props.index }</span></td>
                <td><span className="span-centered">{ this.props.number }</span></td>
                <td><span className="span-centered">{ this.props.city }</span></td>
                <td><span className="span-centered">{ this.props.plane_type }</span></td>
                <td><span className="span-centered">{ this.props.time }</span></td>
                <td><span className="span-centered">{ this.props.fact_time }</span></td>
                <td><span className="span-centered">{ this.props.status }</span></td>
            </tr>
    );
    }
}
export default FlightRow