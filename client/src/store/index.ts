import { create } from 'zustand'
import { Store } from '../types'

export const useStore = create<Store>()((set) => ({
    isMouseDown: false,
    isAuth: false,
    color: 'red',
    userName: '',
    password: '',
    token: localStorage.getItem('token') ?? '',
    setToken: (token: string) => set((state) => ({ ...state, token })),
    setPassword: (password: string) => set((state) => ({ ...state, password })),
    setIsAuth: (isAuth: boolean) => set((state) => ({ ...state, isAuth })),
    setColor: (color: string) => set((state) => ({ ...state, color })),
    setIsMouseDown: (isMouseDown: boolean) =>
        set((state) => ({ ...state, isMouseDown })),
    setUserName: (name: string) =>
        set((state) => ({ ...state, userName: name })),
}))
