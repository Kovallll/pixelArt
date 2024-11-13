import { Board } from 'src/components/Board'
import { Pallete } from 'src/components/Pallete'
import { UserInfo } from 'src/components/UserInfo'
import styles from './styles.module.scss'

const Art = () => {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <UserInfo />
                <div className={styles.wrap}>
                    <Board />
                    <Pallete />
                </div>
            </div>
        </div>
    )
}

export default Art
