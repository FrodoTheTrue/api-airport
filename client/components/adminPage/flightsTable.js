import React from 'react';
import FlightItem from './flightItem';

export default ({flights, store}) => {
    return (
        <div>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th><span className="span-centered">#</span></th>
                    <th><span className="span-centered"> NumberPlane </span></th>
                    <th><span className="span-centered"> City Up </span></th>
                    <th><span className="span-centered"> City Down </span></th>
                    <th><span className="span-centered"> Plane Type </span></th>
                    <th><span className="span-centered"> Time </span></th>
                    <th><span className="span-centered"> Fact Time </span></th>
                    <th><span className="span-centered"> Status </span></th>
                </tr>
            </thead>
            <tbody>
            {flights.map((flight, i) => (
                <FlightItem
                    key={i}
                    index={i}
                    id={flight.id}
                    number={flight.number}
                    city_up={flight.city_up}
                    city_down={flight.city_down}
                    plane_type={flight.plane_type}
                    time={flight.time}
                    fact_time={flight.fact_time}
                    status={flight.status}
                    store={store}
                />
            ))}
            </tbody>
        </table>
        </div>
    );
};