import React, { useEffect, useState } from "react"
import "./ParkExplorer.css"
import useSimpleAuth from "../auth/useSimpleAuth"
import ParkManager from "../../modules/ParkManager"
import AreaList from "./AreaList"
import AttractionList from "./AttractionList"

const ParkExplorer = props => {
    const [areas, setAreas] = useState([])
    const [attractions, setAttractions] = useState([])
    const { isAuthenticated } = useSimpleAuth()

    const getAttractions = (areaId) => {
        if (isAuthenticated()) {
            ParkManager.getAttractionsByArea(areaId)
                .then((allAttractions) => {
                    setAttractions(allAttractions)
                })
        }
    }

    const getParkAreas = () => {
        if (isAuthenticated()) {
            ParkManager.getParkAreas()
                .then(setAreas)
        }
    }

    useEffect(getParkAreas, [])

    return (
        <>
            <main className="explorer">
                <AreaList areas={areas} getAttractions={getAttractions} />
                <AttractionList attractions={attractions} {...props} />
            </main>
        </>
    )
}

export default ParkExplorer
