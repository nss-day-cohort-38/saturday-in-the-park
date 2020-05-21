import React, { useEffect, useState } from "react"
import ItineraryManager from "../../modules/ItineraryManager"
import ParkManager from "../../modules/ParkManager"


const ItineraryEditForm = props => {
  const [itineraryItem, setItineraryItem] = useState({ startTime: 1, attractionId: 1 });
  const [attractions, setAttractions] = useState([])

  const handleFieldChange = (evt) => {
    const stateToChange = { ...itineraryItem };
    stateToChange[evt.target.id] = evt.target.value;
    setItineraryItem(stateToChange);
  };

  const handleUpdate = e => {
    e.preventDefault();

    const itineraryItemToUpdate = {
      "starttime": Number(itineraryItem.startTime),
      "attraction_id": Number(itineraryItem.attractionId)
    }

    ItineraryManager.updateItineraryItem(props.match.params.itemId, itineraryItemToUpdate)
      .then(() => props.history.push("/myitinerary"))
  }

  useEffect(() => {
    ItineraryManager.getItineraryItem(props.match.params.itemId)
      .then(item => {
        const stateToChange = { ...itineraryItem }
        stateToChange.startTime = item.starttime
        stateToChange.attractionId = item.attraction_id
        setItineraryItem(stateToChange)
      })
    ParkManager.getAttractions()
      .then((allAttractions) => {
        setAttractions(allAttractions)
      })
}, []);

return (
  <form className="form--login" onSubmit={handleUpdate}>
    <h1 className="h3 mb-3 font-weight-normal">Login to use Saturday in the Park</h1>
    <fieldset>
      <label htmlFor="attractionId">  </label>
      <select
        className="form-control"
        id="attractionId"
        value={itineraryItem.attractionId}
        onChange={handleFieldChange}>
        {attractions.map(attraction =>
          <option key={attraction.id} value={attraction.id}>
            {attraction.name}
          </option>
        )}
      </select>
    </fieldset>
    <fieldset>
      <label htmlFor="startTime"> Start Time </label>
      <input onChange={handleFieldChange} type="number"
        id="startTime"
        required="" autoFocus="" value={itineraryItem.startTime} />
    </fieldset>
    <fieldset>
      <button type="submit">
        Update
                    </button>
    </fieldset>
  </form>
)
}

export default ItineraryEditForm;
