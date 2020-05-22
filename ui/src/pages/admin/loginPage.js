import React, { useState, useEffect } from 'react'
import './loginPage.css'
import { Redirect } from 'react-router-dom'
import backgroundImg from './../../images/admin/backgroundLogin.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin, adminVerify } from '../../redux'

function LoginPage() {
    //
    // useState
    const [ username, setUsername ] = useState('cek')
    const [ password, setPassword ] = useState('cek1')

    //
    // dispatch action
    const dispatch = useDispatch()

    //
    // use effect
    useEffect(() => {
        let token = localStorage.getItem("pwa_portfolio")
        console.log(token)
        dispatch(adminVerify(token))
    }, [dispatch])

    //
    // selector
    const authAdmin = useSelector( state => state.authAdmin )
    console.log(authAdmin)

    if(authAdmin.message === "Admin authorized!" && authAdmin.accessToken ){
        return(
            <Redirect from="/login" to="/myPage" />
        )
    }

    return (
        <div id="background">
            <img src={backgroundImg} alt="bgimage" />
            <div className="box">
                <h2>Login</h2>
                <form>
                <div className="inputBox">
                    <input 
                        onChange={(e) => setUsername(e.target.value)}
                        type="text" 
                        required 
                    />
                    <label>Username</label>
                </div>
                <div className="inputBox">
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        required 
                    />
                    <label>Password</label>
                </div>
                <input 
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(adminLogin({
                            adminUsername: username,
                            adminPassword: password
                        }))
                    }}
                    type="submit" 
                    // defaultValue="Submit" 
                />
                </form>
            </div>
            <div>
                <a href="http://www.freepik.com">Designed by macrovector / Freepik</a>
            </div>
        </div>
    )
}

export default LoginPage
