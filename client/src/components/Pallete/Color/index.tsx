import { useStore } from '../../../store'
import styles from './styles.module.scss'
import { ColorProps } from './types'

export const Color = ({ color, ...props }: ColorProps) => {
    const setColor = useStore((state) => state.setColor)

    const handleColorClick = () => {
        setColor(color)
    }

    return (
        <div
            {...props}
            className={styles.container}
            style={{ background: color }}
            onClick={handleColorClick}
        ></div>
    )
}
