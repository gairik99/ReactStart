import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';

export default function Counter() {
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.counter);

    const onUpClick = () => {
        dispatch(increment());
    };

    const onDownClick = () => {
        if (count > 0)
            dispatch(decrement());
    };

    return (
        <>
            <button onClick={onUpClick}>up</button>
            <span>{count}</span>
            <button onClick={onDownClick}>down</button>
        </>
    );
}
