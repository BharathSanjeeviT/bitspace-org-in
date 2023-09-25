import { create } from 'zustand'
import { User } from '../utills/types'

type UserState = {
    user: User | null,
    setUser: (user: User) => void,
    resetUser: () => void
}


export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (u) => set(() => ({ user: u })),
    resetUser: () => set(() => ({ user: null }))
}))
