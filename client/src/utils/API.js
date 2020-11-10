import axios from "axios";

export default {
  // Gets all books
  getTrips: function() {
    return axios.get("/api/trip");
  },
  // Gets the book with the given id
  getTrips: function(id) {
    return axios.get("/api/trip/" + id);
  },
  // Deletes the book with the given id
  deleteTrip: function(id) {
    return axios.delete("/api/trip/" + id);
  },
  // Saves a book to the database
  saveTrips: function(tripData) {
    return axios.post("/api/trip", tripData);
  }
};