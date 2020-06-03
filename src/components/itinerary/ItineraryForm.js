import React, { useEffect, useState } from "react"
import ItineraryManager from "../../modules/ItineraryManager"
import ParkManager from "../../modules/ParkManager"


const ItineraryForm = props => {
  const [itineraryItem, setItineraryItem] = useState({ startTime: 1, attractionId: 1 });
  const [attractions, setAttractions] = useState([])
  const [image, setImage] = useState({ imageFile: "", imagePath: "Choose File" });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...itineraryItem };
    stateToChange[evt.target.id] = evt.target.value;
    setItineraryItem(stateToChange);
  };

  const handleFileUpload = e => {
    setImage({ imageFile: e.target.files[0], imagePath: e.target.files[0].name });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (props.match.params.itemId) {
      const itineraryItemObj = {
        "start_time": Number(itineraryItem.startTime),
        "attraction_id": Number(itineraryItem.attractionId)
      }

      ItineraryManager.updateItineraryItem(props.match.params.itemId, itineraryItemObj)
        .then(() => props.history.push("/myitinerary"))
    }
    else {
      const formData = new FormData();
      formData.append("image", image.imageFile, image.imagePath);
      formData.append('start_time', itineraryItem.startTime);
      formData.append('attraction_id', itineraryItem.attractionId);

      ItineraryManager.createItineraryItem(formData)
        .then(() => props.history.push("/myitinerary"))
    }


  }

  useEffect(() => {
    if (props.match.params.itemId) {
      ItineraryManager.getItineraryItem(props.match.params.itemId)
        .then(item => {
          const stateToChange = { ...itineraryItem }
          stateToChange.startTime = item.starttime
          stateToChange.attractionId = item.attraction_id
          setItineraryItem(stateToChange)
        })
    }
    ParkManager.getAttractions()
      .then((allAttractions) => {
        setAttractions(allAttractions)
      })
  }, []);

  return (
    <form className="form--login" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Add new item to my Itinerary</h1>
      <fieldset>
        <label htmlFor="attractionId">Attraction</label>
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
      {!props.match.params.itemId > 0 &&
        <>
          <input
            type='file'
            id='customFile'
            onChange={handleFileUpload}
          />
          <label htmlFor='customFile'>
            {image.imagePath}
          </label>
        </>
      }
      <fieldset>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  )
}

export default ItineraryForm;
