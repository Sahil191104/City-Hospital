import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/slice/counterSlice';

function CounterRedux(props) {
    const dispatch = useDispatch();
    const counteVal = useSelector(state => state.couter);

    const increse = () => {
        dispatch(increment(3));
    };

    const dicrese = () => {
        dispatch(decrement(4));
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