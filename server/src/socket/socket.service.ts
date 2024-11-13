import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { Cell, ChangeCellData, Room } from 'src/types'

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class SocketService implements OnGatewayConnection, OnGatewayDisconnect {
    private rooms: Room[] = []
    private boardWidth: number = 50
    private boardHeight: number = 50
    @WebSocketServer() server: Server

    initBoard() {
        const cells: Cell[] = []
        let id = 0
        for (let i = 0; i < this.boardWidth; i++) {
            for (let j = 0; j < this.boardHeight; j++) {
                cells.push({ id: String(id), color: null })
                id++
            }
        }

        return cells
    }

    @SubscribeMessage('initBoard')
    initClientBoard(
        @MessageBody() roomName: string,
        @ConnectedSocket() client: Socket
    ) {
        const roomData = this.rooms.find((room) => room.roomName === roomName)
        client.emit('getArtData', roomData.artData)
    }

    handleConnection(client: any) {
        console.log(client.id, 'Connected')
    }

    handleDisconnect(client: any) {
        console.log('Client disconnected:', client.id)
    }

    @SubscribeMessage('clickCell')
    clickCell(@MessageBody() data: ChangeCellData): void {
        let newArtData: Cell[] = []
        console.log(this.rooms, 'this.rooms')
        console.log(data.roomName, 'data.roomName')
        this.rooms = this.rooms.map((room) => {
            if (room.roomName === data.roomName) {
                console.log(data.cell.id, 'data.cell.id')
                newArtData = room.artData.map((cell) => {
                    if (cell.id === data.cell.id) {
                        console.log(data.cell, 'datacell')
                        return data.cell
                    } else return cell
                })
                console.log(newArtData, 'newArtData')
                return { roomName: room.roomName, artData: newArtData }
            } else return room
        })
        this.server.to(data.roomName).emit('getArtData', newArtData)
    }

    @SubscribeMessage('createRoom')
    createRoom(
        @MessageBody() roomName: string,
        @ConnectedSocket() client: Socket
    ) {
        client.join(roomName)
        this.rooms.push({
            roomName,
            artData: this.initBoard(),
        })
    }

    @SubscribeMessage('joinRoom')
    joinRoom(
        @MessageBody() roomName: string,
        @ConnectedSocket() client: Socket
    ) {
        const finedRoom = this.rooms.find((room) => room.roomName === roomName)
        if (finedRoom) {
            client.join(roomName)
            client.emit('getArtData', finedRoom.artData)
        }
    }
}
