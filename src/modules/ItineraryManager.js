const parkApiUrl = "http://localhost:8000"

export default {
  getUserItinerary() {
    return fetch(`${parkApiUrl}/itinerary`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("kennywood-token")}`
      }
    })
      .then(response => response.json())
  },
  getItineraryItem(itineraryItemId) {
    return fetch(`${parkApiUrl}/itinerary/${itineraryItemId}`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("kennywood-token")}`
      }
    })
      .then(response => response.json())
  },
  createItineraryItem(itineraryItem) {
    return fetch(`${parkApiUrl}/itinerary`, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("kennywood-token")}`
      },
      body: JSON.stringify(itineraryItem)
    })
  },
  updateItineraryItem(itineraryItemId, itineraryItem) {
    return fetch(`${parkApiUrl}/itinerary/${itineraryItemId}`, {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("kennywood-token")}`
      },
      body: JSON.stringify(itineraryItem)
    })
  },
  deleteItineraryItem(itineraryItemId) {
    return fetch(`${parkApiUrl}/itinerary/${itineraryItemId}`, {
      "method": "DELETE",
      "headers": {
        "Authorization": `Token ${sessionStorage.getItem("kennywood-token")}`
      }
    })
  }
}
