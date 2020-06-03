const parkApiUrl = "http://localhost:8000"

export default {
  getParkAreas() {
    return fetch(`${parkApiUrl}/parkareas`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())

  },
  getAttractions() {
    return fetch(`${parkApiUrl}/attractions`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())

  },
  getAttractionsByArea(areaId) {
    return fetch(`${parkApiUrl}/attractions?area=${areaId}`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
  }
}
