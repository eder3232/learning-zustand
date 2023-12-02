import { create, StateCreator } from 'zustand'
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware'

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

const sessionStorage: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    console.log('getItem', name)
    return null
  },
  setItem: function (name: string, value: string): void | Promise<void> {
    console.log('setItem', name, value)
  },
  removeItem: function (name: string): void | Promise<void> {
    console.log('removeItem', name)
  },
}

const jsonStorage = createJSONStorage(() => sessionStorage)

const useAppStore = create<AppState & AppActions>()(
  persist(appStoreApi, { name: 'app-store', storage: jsonStorage })
)
