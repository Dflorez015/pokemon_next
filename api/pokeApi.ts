import axios from "axios";

const rest = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

export default rest