import axios from "axios";

const url = `http://localhost:5000/api/products`

export const getProducts = () => axios.get(url)

export const getProductDetails = (id) => axios.get(`${url}/${id}`)