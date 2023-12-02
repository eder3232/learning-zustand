import { create, StateCreator } from 'zustand'
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware'
import { jsonStorage } from './storage/custom-session-storage'

type AppState = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

type AppActions = {
  setName: (name: string) => void
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  setPasswordConfirmation: (password_confirmation: string) => void
}

const appStoreApi: StateCreator<AppState & AppActions> = (set, get) => ({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  setName: (name: string) => set((state) => ({ name: name })),
  setEmail: (email: string) => set((state) => ({ email: email })),
  setPassword: (password: string) => set((state) => ({ password: password })),
  setPasswordConfirmation: (passwordConfirmation: string) =>
    set((state) => ({ passwordConfirmation: passwordConfirmation })),
})

export const useAppStore = create<AppState & AppActions>()(
  persist(appStoreApi, { name: 'app-store', storage: jsonStorage })
)
