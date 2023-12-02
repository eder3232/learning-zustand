import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

type AppState = {
  bears: number
}

type AppActions = {
  increase: () => void
  decrease: () => void
}

const appStoreApi: StateCreator<AppState & AppActions> = (set, get) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: () => set((state) => ({ bears: state.bears - 1 })),
})

const useAppStore = create<AppState & AppActions>()(
  persist(appStoreApi, { name: 'app-store' })
)
