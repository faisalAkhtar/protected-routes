import { useContext } from "react"
import { Redirect } from "react-router"

import { AuthContext } from "../utils/Auth"

export default function Login({ history }) {
    const { currentUser, loading } = useContext(AuthContext)

    if (loading)
        return <h1>Loading from login...</h1>

    if (currentUser)
        return <Redirect to='/' />

    return (
        <>
            <h1>LOGIN</h1>
            <p>Login to access the following pages</p>
            <ul>
                <li><a href='/'>HOME</a></li>
                <li><a href='/about'>ABOUT</a></li>
            </ul>
        </>
    )
}
