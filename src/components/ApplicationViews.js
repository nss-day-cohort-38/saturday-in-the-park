import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import ParkExplorer from "./home/ParkExplorer"
import MyItinerary from "./itinerary/MyItinerary"
import ItineraryForm from "./itinerary/ItineraryForm"



const ApplicationViews = () => {
    return (
        <React.Fragment>

            <Route exact path="/" render={props => {
                return <ParkExplorer {...props} />
            }}
            />

            <Route path="/register" render={props => {
                return <Register {...props} />
            }}
            />

            <Route path="/login" render={props => {
                return <Login {...props} />
            }}
            />

            <Route exact path="/myitinerary" render={props => {
                return <MyItinerary {...props} />
            }}
            />
            <Route exact path="/myitinerary/new" render={props => {
                return <ItineraryForm {...props} />
            }}
            />
            <Route path="/myitinerary/:itemId(\d+)/edit" render={props => {
                return <ItineraryForm {...props} />
            }} />

        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
