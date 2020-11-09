import axios from "axios";

export default {
    //Saves user to database
    saveUser: function(userData) {
        return axios.post("/api/signup", userData);
    }
};