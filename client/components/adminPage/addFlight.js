'use strict';
import React from 'react';
import {Component} from 'react';
import {addFlightToDB} from '../../../client/actions';

class addFlight extends Component {
    constructor(props) {
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.setMarginStyle = {
            margin: '10px'
        };
     }
    onSubmitForm (event) {
        var flightObject = {
            number: $('#number').val(),
            city_up: $('#city_up').val(),
            city_down: $('#city_down').val(),
            plane_type: $('#plane_type').val(),
            time: $('#time').val(),
            fact_time: $('#fact_time').val(),
            status: $('#status').val(),
        };
        console.log(flightObject);
        this.props.store.dispatch(addFlightToDB(flightObject));
    }
    render () {
        return (
            <div>
                <h3>Форма добавления рейса:</h3>
                <form className="form-inline">
                    <input id="number" style={this.setMarginStyle} className="form-control" type="text" placeholder="Number"/><br/>
                    <input id="city_up" style={this.setMarginStyle} className="form-control" type="text" placeholder="City Up"/><br/>
                    <input id="city_down" style={this.setMarginStyle} className="form-control" type="text" placeholder="City Down"/><br/>
                    <input id="plane_type" style={this.setMarginStyle} className="form-control" type="text" placeholder="Plane Type"/><br/>
                    <input id="time" style={this.setMarginStyle} className="form-control" type="text" placeholder="Time"/><br/>
                    <input id="fact_time" style={this.setMarginStyle} className="form-control" type="text" placeholder="Fact Time"/><br/>
                    <input id="status" style={this.setMarginStyle} className="form-control" type="text" placeholder="Status"/><br/>
                    <button style={this.setMarginStyle} onClick={this.onSubmitForm} className="btn btn-success" type="submit">Добавить рейс </button>
                </form>
            </div>
        );
    }
}
export default addFlight