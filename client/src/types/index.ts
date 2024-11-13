export interface CellType {
    id: string
    paintColor: string
    backgroundColor: string | null
}

export interface ServerCell {
    id: string
    color: string
}

export interface WindowSize {
    width: number
    height: number
}

export interface Store {
    isMouseDown: boolean
    isAuth: boolean
    color: string
    userName: string
    password: string
    token: string
    setToken: (token: string) => void
    setPassword: (password: string) => void
    setIsAuth: (isAuth: boolean) => void
    setColor: (color: string) => void
    setIsMouseDown: (isMouseDown: boolean) => void
    setUserName: (name: string) => void
}

export interface User {
    id: string
    userName: string
}

export interface LoginResponse {
    access_token: string
}
