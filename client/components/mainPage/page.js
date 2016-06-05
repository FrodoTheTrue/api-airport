import React from 'react';
import Footer from '../adminPage/footer';
import TableIn from './tableIn';
import TableOut from './tableOut';

var inlineStyle = {
    textAlign: 'center'
};

export default ({store}) => {
    const {flights} = store.getState();
    return (
        <div>
            <div className="container" style = {inlineStyle}>
                <h1>Табло вылета</h1>
            </div>
            <div className='container'>
                <TableIn flights={flights} store={store} />
            </div>
            <div className="container" style = {inlineStyle}>
                <h1>Табло прилета</h1>
            </div>
            <div className='container'>
                <TableOut flights={flights} store={store} />
            </div>
            <div className='container'>
                <a href="/admin"><button className="btn btn-success">В админку</button></a>
            </div>
            <Footer />
        </div>
    );
};