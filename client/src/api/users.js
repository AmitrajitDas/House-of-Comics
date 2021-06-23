import axios from 'axios';

const API = axios.create({ baseURL: `http://localhost:5000/api/auth` })

const config = {

    headers: {
        'Content-Type': 'application/json',
    },
}

export const userLogin = (email, password) => API.post('/login', {email, password}, config)

export const userRegister = (name, email, password) => API.post('/signup', {name, email, password}, config)

export const getUserProfile = (id, token) => {
    
    const config = {

            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `, 
            },
        }
    
    
    API.get(`/${id}`, config )
}