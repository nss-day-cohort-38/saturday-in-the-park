const parkApiUrl = "http://localhost:8000"

export default {
  getParkAreas() {
    return fetch(`${parkApiUrl}/parkareas`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("kennywood-token")}`
      }
    })
      .then(response => response.json())

  },
  getAttractionsByArea(areaId) {
    return fetch(`${parkApiUrl}/attractions?area=${areaId}`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("kennywood-token")}`
      }
    })
      .then(response => response.json())
  }
}
