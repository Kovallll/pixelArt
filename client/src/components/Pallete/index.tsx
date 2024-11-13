import { colors } from 'src/constants'
import { Color } from './Color'
import styles from './styles.module.scss'

export const Pallete = () => {
    return (
        <div className={styles.container}>
            <div className={styles.colorsTable}>
                {colors.map((color, index) => (
                    <Color key={index} color={color} />
                ))}
            </div>
            <p className="">Ластик</p>
            <div className={styles.eraser}>
                <Color color="white" />
            </div>
        </div>
    )
}
