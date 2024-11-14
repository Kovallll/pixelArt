import axios from 'axios'
import { serverPort } from 'src/constants'
import { LoginResponse } from 'src/types'

export const registerUser = async (userName: string, password: string) => {
    try {
        await axios.post(`http://localhost:${serverPort}/auth/register`, {
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
            `http://localhost:${serverPort}/auth/login`,
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
