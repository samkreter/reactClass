import axios from 'axios';


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID QxltGVXdsfM3XC-T7iJxaPKk6dsLJwkF13r1gZ-PHTc"
    }
});




