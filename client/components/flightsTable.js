import React from 'react';
import FlightItem from './flightItem';

export default ({flights, store}) => {
    return (
        <div>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th> # </th>
                    <th> NumberPlane </th>
                    <th> City Up </th>
                    <th> City Down </th>
                    <th> Plane Type </th>
                    <th> Time </th>
                    <th> Fact Time </th>
                    <th> Status</th>
                </tr>
            </thead>
            <tbody>
            {flights.map((flight, i) => (
                <FlightItem
                    key={i}
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