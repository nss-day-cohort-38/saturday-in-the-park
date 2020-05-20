import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"



const ApplicationViews = () => {
    return (
        <React.Fragment>

            <Route
                exact path="/" render={props => {
                    return (
                        <>
                            <h1>Placeholder for Park areas and attractions</h1>
                        </>
                    )
                }}
            />

            <Route
                path="/register" render={props => {
                    return (
                        <>
                            <Register {...props} />
                        </>
                    )
                }}
            />

            <Route
                path="/login" render={props => {
                    return (
                        <>
                            <h1>Placeholder for Login</h1>
                        </>
                    )
                }}
            />

            <Route
                path="/myitinerary" render={props => {
                    return (
                        <>
                            <h1>Placeholder for user's itinerary</h1>
                        </>
                    )
                }}
            />

        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
