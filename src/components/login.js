import React, {useEffect, useState} from 'react'

export const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUser = (e) => {
        setUser(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>
            <div>login</div>
            <form action="">
                <p>User: {user}</p>
                <p>Pass: {password}</p>
                <div>
                    <label htmlFor="user">Usuario</label>
                    <input type="text" name='user' id='user' 
                        value={user} 
                        onChange={onChangeUser}/>
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input type="password" name='pass' id='pass' 
                        onChange={onChangePassword}/>                  
                </div>

                <button type='submit'>Iniciar sesión</button>
            </form>
        </>
    )
}