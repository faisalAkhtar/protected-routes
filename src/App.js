import { BrowserRouter, Route, Switch } from "react-router-dom"

import { AuthProvider } from "./utils/Auth"
import PrivateRoute from "./utils/PrivateRoute"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute exact path='/about' component={About} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    )
}
