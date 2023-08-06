import axios from "axios"

const URL = 'http://localhost:3001'

const getProducts = () => {
    return axios.get(`${URL}/product`)
}

export default {
    get : getProducts
}