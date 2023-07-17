import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterdicreament, counterincreament } from '../../redux/action/counter.action';

function CounterRedux(props) {
    const dispatch = useDispatch();
    const counteVal = useSelector(state => state.couter);

    const increse = () => {
        dispatch(counterincreament());
    };

    const dicrese = () => {
        dispatch(counterdicreament());
    };

    return (
        <div>
            <button onClick={() => increse()}>+</button>
            <span>{counteVal.count}</span>
            <button onClick={() => dicrese()}>-</button>
        </div>
    );
}

export default CounterRedux;