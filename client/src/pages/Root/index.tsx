import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import { useConnectSocket } from 'src/hooks'

export const Root = () => {
    useConnectSocket()

    return (
        <div className={styles.container}>
            <Outlet />
        </div>
    )
}
