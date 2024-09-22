import React from 'react'
import { useAuth } from '../../context/auth-context'

export default function Login() {
    const { isLoggedIn, SetLoggedIn } = useAuth();
    const onHandleClick = () => {
        SetLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <h2>This is login page</h2>


            {
                !isLoggedIn ? (
                    <label>
                        Mobile No:
                        <input placeholder='enter mo no' />
                    </label>
                ) : null
            }


            <button onClick={onHandleClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </div >
    )

}