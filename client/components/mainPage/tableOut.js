import React from 'react';
import FlightRow from './flightRow';

export default ({flights, store}) => {
    var rows = [];
    var ind = 1;
    for (var i=0;i<flights.length;i++) {
        if (flights[i].city_down == 'Екатеринбург') {
            rows.push(<FlightRow
            key={i}
            index={ind}
            id={flights[i].id}
            city={flights[i].city_up}
            number={flights[i].number}
            plane_type={flights[i].plane_type}
            time={flights[i].time}
            fact_time={flights[i].fact_time}
            status={flights[i].status}
            store={store}
                />)
            ind += 1;
        }
    }
    return (
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th><span className="span-centered">#</span></th>
                    <th><span className="span-centered"> Номер </span></th>
                    <th><span className="span-centered"> Город назначения </span></th>
                    <th><span className="span-centered"> Тип самолета </span></th>
                    <th><span className="span-centered"> Время </span></th>
                    <th><span className="span-centered"> Фактическое время </span></th>
                    <th><span className="span-centered"> Статус </span></th>
                </tr>
                </thead>
            <tbody>
                {rows}
            </tbody>
            </table>
        </div>
    );
};