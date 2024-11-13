import { Button } from 'src/components/Button'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'src/constants'
import SocketApi from 'src/api/socket-api'
import { useState } from 'react'
import Modal from 'src/components/Modal'
import { Input } from 'src/components/Input'
import { jwtDecode } from 'jwt-decode'
import { User } from 'src/types'

export const Rooms = () => {
    const [roomName, setRoomName] = useState('')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const token = localStorage.getItem('token')
    const user = jwtDecode(token ?? '') as User

    const navigate = useNavigate()

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleChangeUserRoomName = (value: string) => {
        setRoomName(value)
    }

    const handleCreateRoom = () => {
        SocketApi.socket?.emit('createRoom', user.userName)
        localStorage.setItem('roomName', user.userName)
        navigate(Paths.Art)
    }

    const handleClickConnectButton = () => {
        setIsOpenModal(true)
    }

    const handleConnectToRoom = () => {
        SocketApi.socket?.emit('joinRoom', roomName)
        localStorage.setItem('roomName', roomName)
        navigate(Paths.Art)
    }

    return (
        <div className={styles.container}>
            <Button title="Создать холст" onClick={handleCreateRoom} />
            <Button
                title="Подключиться к другому пользователю"
                onClick={handleClickConnectButton}
            />
            {isOpenModal && (
                <Modal onCloseModal={handleCloseModal}>
                    <div className={styles.modal}>
                        <Input
                            value={roomName}
                            onChangeValue={handleChangeUserRoomName}
                            text="Введите имя пользователя, к которому хотите подключиться"
                        />
                        <Button
                            title="Подключиться"
                            onClick={handleConnectToRoom}
                        />
                    </div>
                </Modal>
            )}
        </div>
    )
}
