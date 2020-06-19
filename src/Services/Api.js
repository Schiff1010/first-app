import axios from 'axios';
import StaticVar from '../Config/StaticVar';

// ===> api create
const api = axios.create({
    baseURL: StaticVar.URL_POSTS,
    // timeout: 10000,
    headers: {},
});

// // ===> api interceptors
// api.interceptors.request.use(function (config) {
//     // set headers after authentication
//     config.headers['token'] = localStorage.getItem("token");
//     return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// ===> api list function request

// GET
const getPosts = () => api.get('/posts');
// POST
const postContents = (data) => api.post('/posts/create', data);
// PUT
const putContents = (id, data) => api.put('/posts/' + id, data);
// DELETE
const deleteContents = (id) => api.delete('/posts/' + id);

export const apis = {
    getPosts,
    postContents,
    putContents,
    deleteContents,
};

export default apis;
