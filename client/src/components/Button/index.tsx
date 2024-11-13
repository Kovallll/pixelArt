import styles from './styles.module.scss'
import { ButtonProps } from './types'

export const Button = ({ title, ...props }: ButtonProps) => {
    return (
        <button {...props} className={styles.button}>
            {title}
        </button>
    )
}
