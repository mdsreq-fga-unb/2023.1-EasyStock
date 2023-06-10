import axios from "axios";

const baseURL = "http://localhost:8000";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0IiwiaWF0IjoxNjg2NDA2MTgyLCJleHAiOjE2ODY2NjUzODJ9._HsxueogdyUT5KsbFmyQHvZT-feMPm-UL9bHOMnQBB0"

const config = {
    headers: { Authorization: `Bearer ${token}` }
}

export function getAllPosts() {
    const response = axios.get(`${baseURL}/produto`, config);

    return response;
}

// export function getToken() {
//     const token = axios.get(`${baseURL}/auth/admin`);

//     return token
// }
