import { useStore } from 'src/store'
import styles from './styles.module.scss'
import { jwtDecode } from 'jwt-decode'

export const UserInfo = () => {
    const { token } = useStore((state) => state)

    const { userName } = jwtDecode(token) as { userName: string }

    return <div className={styles.container}>{userName}</div>
}
