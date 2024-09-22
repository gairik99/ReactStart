import React from 'react'
import { useCount } from '../context/count-context'

export default function Text() {
    const { count } = useCount();
    return (
        <div>count:{count}</div>
    )
}
