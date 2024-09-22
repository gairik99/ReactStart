import React from 'react'
import Text from './Text'
import { useCount } from '../context/count-context'

export const Button = () => {
    const { count, setCount } = useCount();
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);
    return (
        <>
            <Text />
            <button onClick={increaseCount}>INCREASE</button>
            <button onClick={decreaseCount}>DECREASE</button>
        </>


    )
}

// export default Button