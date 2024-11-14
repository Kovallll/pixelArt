import axios from 'axios'
import { serverPort } from 'src/constants'

export const getAllUsers = async () => {
    try {
        const { data } = await axios.get(`http://localhost:${serverPort}/users`)
        return data
    } catch (error) {
        console.error(error)
    }
}