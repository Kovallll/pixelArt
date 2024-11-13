import styles from './styles.module.scss'
import { useBoard } from '../../hooks'
import { useStore } from '../../store'

export const Board = () => {
    const setIsMouseDown = useStore((state) => state.setIsMouseDown)
    const roomName = localStorage.getItem('roomName')
    const { pixelBoard } = useBoard(roomName ?? '')

    const handleMouseDown = () => {
        setIsMouseDown(true)
    }

    const handleMouseUp = () => {
        setIsMouseDown(false)
    }

    return (
        <div
            className={styles.board}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {pixelBoard.map((el) => el)}
        </div>
    )
}
