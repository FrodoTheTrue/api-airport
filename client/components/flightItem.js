import React from 'react';

export default ({key, id, number, city_up, city_down, plane_type, time, fact_time, status, store}) => {
    return (
        <tr>
            <td>{ id }</td>
            <td>{ number }</td>
            <td>{ city_up }</td>
            <td>{ city_down }</td>
            <td>{ plane_type }</td>
            <td>{ time }</td>
            <td>{ fact_time }</td>
            <td>{ status }</td>
        </tr>
    );
};