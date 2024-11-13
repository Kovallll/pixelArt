import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { User } from 'src/types'
import { getAllUsers } from 'src/utils'

export const UsersTable = () => {
    const [allUsers, setAllUsers] = useState<User[]>([])

    useEffect(() => {
        const getData = async () => {
            const data = await getAllUsers()
            setAllUsers(data)
        }
        getData()
    }, [])

    return (
        <div className={styles.container}>
            {allUsers.map((user) => (
                <p>{user.userName}</p>
            ))}
        </div>
    )
}
