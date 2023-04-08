import axios from "axios"

const apiClient = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URI,
    headers: {},
    withCredentials: true,
  })
}

export default apiClient
