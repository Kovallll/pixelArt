import axios from 'axios'

export const getAllUsers = async () => {
    try {
        const { data } = await axios.get('http://localhost:5000/users')
        return data
    } catch (error) {
        console.error(error)
    }
}