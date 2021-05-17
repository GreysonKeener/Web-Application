import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTV = payload => api.post(`/tv`, payload)
export const getAllShows = () => api.get(`/tvs`)
export const deleteTV = id => api.delete(`/tv/${id}`)
export const insertlogin = payload => api.post(`/tv`, payload)
export const getAllUsers = () => api.get(`/tvs`)
const apis = {
    insertTV,
    getAllShows,
    deleteTV,
    insertlogin,
    getAllUsers,
}

export default apis
