import React, { useContext } from 'react';
import Htag from '../UI/H1toH6/Htag';
import counterContext from './counterContext';

function Counter() {
    const { counter, increment, decrement } = useContext(counterContext)
    return (
        <section id="medicine" className="medicine">
            <center>
                <div className="container1">
                    <div className="section-title">
                        <Htag name="h2tag1">Counter Context</Htag>
                    </div>
                    <div className="count-wrapper">
                        <button onClick={increment}>+</button>
                        <span>{counter}</span>
                        <button onClick={decrement}>-</button>
                    </div>
                </div>
            </center>
        </section>
    );
}

export default Counter;