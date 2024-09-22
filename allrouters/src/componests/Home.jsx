import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const cartNavigate = useNavigate();
    const handleClick = () => {
        cartNavigate('/cart')
    }
    return (
        <>
            <div>Thid id Home</div>
            <button onClick={handleClick}>go to cart</button>
        </>

    )
}
