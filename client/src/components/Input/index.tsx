import { ChangeEvent } from 'react'
import styles from './styles.module.scss'
import { InputProps } from './types'

export const Input = ({ value, onChangeValue, text, ...props }: InputProps) => {
    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, 'e.target.value')
        onChangeValue(e.target.value)
    }

    return (
        <div className={styles.wrap}>
            <p className={styles.label}>{text}</p>
            <input
                {...props}
                className={styles.input}
                type="text"
                value={value}
                onChange={handleChangeValue}
            />
        </div>
    )
}
