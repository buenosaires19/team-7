import Axios from "axios";

const server = "http://localhost:8080";

const API = {
    get: path => Axios.get(`${server}${path}`).then(response => response.data),
    put: (path, body) => Axios.put(`${server}${path}`, body).then(response => response.data),
    post: (path, body) => Axios.post(`${server}${path}`, body).then(response => response.data),
    delete: (path, body) => Axios.delete(`${server}${path}`, body).then(response => response.data)
  };


export default API