import React from 'react';
import Header from './header';
import Footer from './footer';
import FlightsTable from './flightsTable';
import AddFlight from './addFlight'

export default ({store}) => {
    const {flights} = store.getState();
    return (
        <div>
            <Header />
            <div className='container'>
                <FlightsTable flights={flights} store={store} />
            </div>
            <div className='container'>
                <AddFlight store={store} />
            </div>
            <Footer />
        </div>
    );
};