import { useStore } from 'src/store'
import styles from './styles.module.scss'
import { loginUser, registerUser } from 'src/api'
import { Button } from 'src/components/Button'
import { Input } from 'src/components/Input'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'src/constants'

const Login = () => {
    const { userName, password, setPassword, setUserName, setToken } = useStore(
        (state) => state
    )

    const navigate = useNavigate()

    const handleAuth = async () => {
        if (userName !== '') {
            registerUser(userName, password)
            const token = await loginUser(userName, password)
            setToken(token?.access_token ?? '')
            localStorage.setItem('token', token?.access_token ?? '')
            if (token?.access_token) {
                console.log('redirect')
                navigate(Paths.Rooms)
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <h2>Login</h2>
                <Input
                    text="UserName"
                    value={userName}
                    onChangeValue={setUserName}
                />

                <Input
                    text="Password"
                    value={password}
                    onChangeValue={setPassword}
                />
                <Button title="Submit" type="submit" onClick={handleAuth} />
            </div>
        </div>
    )
}

export default Login
