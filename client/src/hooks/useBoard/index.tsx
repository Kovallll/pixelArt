import SocketApi from 'src/api/socket-api'
import { Cell } from '../../components/Cell'
import { useStore } from '../../store'
import { ServerCell } from '../../types'
import { useEffect, useState } from 'react'

export const useBoard = (roomName: string) => {
    const paintColor = useStore((state) => state.color)
    const [pixelBoard, setPixelBoard] = useState<JSX.Element[]>([])

    useEffect(() => {
        SocketApi.socket?.emit('initBoard', roomName)

        const handleGetArtData = (data: ServerCell[]) => {
            console.log('changeBoard', data)
            const boardData = data.map(({ color, id }) => (
                <Cell
                    key={id}
                    id={id}
                    paintColor={paintColor}
                    backgroundColor={color}
                />
            ))
            setPixelBoard(boardData)
        }

        SocketApi.socket?.on('getArtData', handleGetArtData)

        return () => {
            SocketApi.socket?.off('getArtData', handleGetArtData)
        }
    }, [paintColor, roomName])
    console.log(pixelBoard, 'pix')
    return { pixelBoard }
}
