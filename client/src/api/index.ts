import axios from 'axios'
import { LoginResponse } from 'src/types'

export const registerUser = async (userName: string, password: string) => {
    try {
        await axios.post('http://localhost:5000/auth/register', {
            userName,
            password,
        })
    } catch (error) {
        console.error(error)
    }
}

export const loginUser = async (
    userName: string,
    password: string
): Promise<LoginResponse | undefined> => {
    try {
        const { data } = await axios.post<LoginResponse>(
            'http://localhost:5000/auth/login',
            {
                userName,
                password,
            }
        )

        return data
    } catch (error) {
        console.error(error)
    }
}
