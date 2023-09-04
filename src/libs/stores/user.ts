import { create } from 'zustand'
import { Users, Rank } from '../utills/types'

type UserStateWithRank = Users & { Rank: Rank }

type UserState = {
    user: UserStateWithRank | null,
    setUser: (user: UserStateWithRank) => void
}


export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (u) => set(() => ({ user: u })),
}))
