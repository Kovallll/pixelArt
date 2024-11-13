import { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { CellProps } from './types'
import { useStore } from '../../store'
import SocketApi from 'src/api/socket-api'

export const Cell = ({ id, paintColor, backgroundColor }: CellProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const isMouseDown = useStore((state) => state.isMouseDown)
    const roomName = localStorage.getItem('roomName')
    const ref = useRef<HTMLDivElement | null>(null)
    const pixel = ref.current as HTMLDivElement

    const handleMouseOver = () => {
        if (isMouseDown) setIsHovered(true)
    }
    
    const handleMouseOut = () => {
        setIsHovered(false)
    }

    const handleChangeColor = () => {
        if (pixel) {
            SocketApi.socket?.emit('clickCell', {
                roomName,
                cell: {
                    id,
                    color: paintColor,
                },
            })
            pixel.style.background = paintColor
        }
    }

    if (isHovered) {
        handleChangeColor()
    }

    return (
        <div
            id={id}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleChangeColor}
            style={backgroundColor ? { background: backgroundColor } : {}}
            ref={ref}
            className={styles.pixel}
        />
    )
}
