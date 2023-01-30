import axios from "axios"

const apiClient = () => {
  return axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {},
  })
}

export default apiClient
