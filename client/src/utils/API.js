import axios from "axios";

export default {
  // Gets all trips
  getTrips: function() {
    return axios.get("/api/trip");
  },

  // Gets the book with the given id
  getTrip: function(id) {
    return axios.get("/api/trip/" + id);
  },
  getUserTrip: function() {
    return axios.get("/api/trip");
  },
  addToTrip: function(id) {
    return axios.put("/api/trip/" + id)
  },
  addEvent: function(id, dateIndex, eventData){
    return axios.put("/api/trip/" + id, {dateIndex: dateIndex, eventData: eventData});
  },
  // Deletes the book with the given id

  deleteTrip: function(id) {
    return axios.delete("/api/trip/" + id);
  },
  // Saves a trip to the database
  saveTrips: function(tripData) {
    return axios.post("/api/trip", tripData);
  }
};