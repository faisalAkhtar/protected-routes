import { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router'

import { AuthContext } from './Auth'

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
    const { currentUser, loading } = useContext(AuthContext)
    useEffect(() => {
        console.log(currentUser)
        console.log(loading)
    }, [currentUser, loading])

    return (
        <Route
            {...rest}
            render={
                routeProps => {
                    return (
                        loading ? (
                            <></>
                        ) : (
                            <>
                                {console.log('loaded in page')}
                                {
                                    !currentUser ? (
                                        <Redirect to={'/login'} />
                                    ) : (
                                        <RouteComponent {...routeProps} />
                                    )
                                }
                            </>
                        )
                    )
                }
            }
        />
    )
}
