var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

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
        case 'ADD_FLIGHT_TO_DB':
            fetch('/api/flights', {
                headers: myHeaders,
                method: 'POST',
                body: JSON.stringify(action.flight)
            });
            return {
                flights: state.flights.concat([action.flight])
            };
        case 'CHANGE_FLIGHT_PARAM':
            var changeObject = {};
            changeObject[action.param] = action.value;
            fetch('/api/flights/' + action.id, {
                headers: myHeaders,
                method: 'PUT',
                body: JSON.stringify(changeObject)
            }).then(function(res) {
                
            });
            state.flights[action.index][action.param] = action.value;
            return {
                flights: state.flights
            };
        case 'DELETE_FLIGHT':
            fetch('/api/flights/' + action.id, {
                headers: myHeaders,
                method: 'DELETE'
            }).then(function(res){
                
            });
            state.flights.splice(+action.index, 1);
            return {
                flights: state.flights
            };
        default:
            return state;
    }
};