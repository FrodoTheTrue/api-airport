export const addFlight = flight => {
    return {
        type: 'ADD_FLIGHT',
        flight: flight
    };
};

export const addFlightToDB = flight => {
    return {
        type: 'ADD_FLIGHT_TO_DB',
        flight: flight
    };
};

export const changeFlightParam = (index, id, param, value) => {
    return {
        type: 'CHANGE_FLIGHT_PARAM',
        index,
        id,
        param,
        value
    };
};

export const deleteFlight = (id, index) => {
    return {
        type: 'DELETE_FLIGHT',
        id,
        index
    };
};