export const BACKEND_API = 'http://localhost:5000'

export const {token} = JSON.parse(localStorage.getItem("user")) || { token: null }
export const userData = JSON.parse(localStorage.getItem("user")) || { user: null }