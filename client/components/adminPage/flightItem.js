'use strict';
import React from 'react';
import {Component} from 'react';
import {changeFlightParam, deleteFlight} from '../../../client/actions';

class flightItem extends Component {
    constructor(props) {
        super(props);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeCityUp = this.onChangeCityUp.bind(this);
        this.onChangeCityDown = this.onChangeCityDown.bind(this);
        this.onChangePlaneType = this.onChangePlaneType.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeFactTime = this.onChangeFactTime.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onDeleteFlight = this.onDeleteFlight.bind(this);
    }
    onDeleteFlight (event) {
        this.props.store.dispatch(deleteFlight(this.props.id, this.props.index));
    }
    onChangeNumber (event) {
        this.props.store.dispatch(changeFlightParam(this.props.index, this.props.id, 'number', $(event.target).text()));
    }
    onChangeCityUp (event) {
        this.props.store.dispatch(changeFlightParam(this.props.index, this.props.id, 'city_up', $(event.target).text()));
    }
    onChangeCityDown (event) {
        this.props.store.dispatch(changeFlightParam(this.props.index, this.props.id, 'city_down', $(event.target).text()));
    }
    onChangePlaneType (event) {
        this.props.store.dispatch(changeFlightParam(this.props.index, this.props.id, 'plane_type', $(event.target).text()));
    }
    onChangeTime (event) {
        this.props.store.dispatch(changeFlightParam(this.props.index, this.props.id, 'time', $(event.target).text()));
    }
    onChangeFactTime (event) {
        this.props.store.dispatch(changeFlightParam(this.props.index, this.props.id, 'fact_time', $(event.target).text()));
    }
    onChangeStatus (event) {
        this.props.store.dispatch(changeFlightParam(this.props.index, this.props.id, 'status', $(event.target).text()));
    }
    render () {
        return (
            <tr>
                <td><span className="span-centered">{ this.props.index + 1 }</span></td>
                <td><span className="span-centered" onKeyUp={this.onChangeNumber} contentEditable={true}>{ this.props.number }</span></td>
                <td><span className="span-centered" onKeyUp={this.onChangeCityUp} contentEditable={true}>{ this.props.city_up }</span></td>
                <td><span className="span-centered" onKeyUp={this.onChangeCityDown} contentEditable={true}>{ this.props.city_down }</span></td>
                <td><span className="span-centered" onKeyUp={this.onChangePlaneType} contentEditable={true}>{ this.props.plane_type }</span></td>
                <td><span className="span-centered" onKeyUp={this.onChangeTime} contentEditable={true}>{ this.props.time }</span></td>
                <td><span className="span-centered" onKeyUp={this.onChangeFactTime} contentEditable={true}>{ this.props.fact_time }</span></td>
                <td><span className="span-centered" onKeyUp={this.onChangeStatus} contentEditable={true}>{ this.props.status }</span></td>
                <td><span className="span-centered"><img onClick={this.onDeleteFlight} src={"http://iconshow.me/media/images/ui/Streamline-Icon/png/20/90-delete-garbage-streamline.png"}/></span></td>
            </tr>
        );
    }
}
export default flightItem

// export default ({key, id, number, city_up, city_down, plane_type, time, fact_time, status, store}) => {
//     return (
//         <tr>
//             <td>{ id }</td>
//             <td><span contentEditable={true}>{ number }</span></td>
//             <td>{ city_up }</td>
//             <td>{ city_down }</td>
//             <td>{ plane_type }</td>
//             <td>{ time }</td>
//             <td>{ fact_time }</td>
//             <td>{ status }</td>
//         </tr>
//     );
// };