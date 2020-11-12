import axios from "axios";

export default {
  // Gets all trips
  getTrips: function() {
    return axios.get("/api/trip");
  },
  // Gets the trips with the given id
  getTrips: function(id) {
    return axios.get("/api/trip/" + id);
  },
  // Deletes the trip with the given id
  deleteTrip: function(id) {
    return axios.delete("/api/trip/" + id);
  },
  // Saves a trip to the database
  saveTrips: function(tripData) {
    return axios.post("/api/trip", tripData);
  }
};