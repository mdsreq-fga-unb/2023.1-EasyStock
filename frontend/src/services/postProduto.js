import axios from "axios";

const blogFetch = axios.create({
    baseUrl: "http://localhost:8000",
});

export default blogFetch;
