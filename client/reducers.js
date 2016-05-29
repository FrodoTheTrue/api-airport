const initialState = {
    flights: []
};

exports.FlightApp = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'ADD_FLIGHT':
            return {
                flights: state.flights.concat([action.flight])
            };
        default:
            return state;
    }
};