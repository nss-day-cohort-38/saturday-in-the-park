import React, { useEffect, useState } from "react"
import "./MyItinerary.css"
import ItineraryManager from "../../modules/ItineraryManager"
import useSimpleAuth from "../auth/useSimpleAuth"


const MyItinerary = props => {
    const [itineraryList, setItineraryList] = useState([])
    const { isAuthenticated } = useSimpleAuth()

    const getItinerary = () => {
        if (isAuthenticated()) {
            ItineraryManager.getUserItinerary()
                .then((itineraryItems) => {
                    setItineraryList(itineraryItems)
                })
        }
    }

    const deleteItineraryItem = itineraryItem => {
        ItineraryManager.deleteItineraryItem(itineraryItem.id)
            .then(getItinerary)
    }

    useEffect(getItinerary, [])

    return (
        <>
            <h2>Our Saturday at Kennywood Theme Park</h2>
            <div className="itineraryItems">
                {
                    itineraryList.map((item) => {
                        return <div key={item.id}>
                            {item.attraction.name} in {item.attraction.area.name} at {item.starttime}
                            <button onClick={() => {
                                props.history.push(`/myitinerary/${item.id}/edit`)
                            }}>Edit</button>
                            <button onClick={() => {
                                deleteItineraryItem(item)
                            }}>Delete</button>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default MyItinerary
