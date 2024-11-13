export interface Room {
    roomName: string
    artData: Cell[]
}

export interface Cell {
    id: string
    color: string
}

export interface ChangeCellData {
    cell: Cell
    roomName: string
}

export interface InitBoardData {
    artData: Cell[]
    roomName: string
}
