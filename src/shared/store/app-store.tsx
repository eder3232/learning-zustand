import { create, StateCreator } from 'zustand'
import {
  persist,
  StateStorage,
  createJSONStorage,
  devtools,
} from 'zustand/middleware'
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

const appStoreApi: StateCreator<
  AppState & AppActions,
  [['zustand/devtools', never]]
> = (set, get) => ({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  setName: (name: string) => set((state) => ({ name: name }), false, 'setName'),
  setEmail: (email: string) =>
    set((state) => ({ email: email }), false, 'setEmail'),
  setPassword: (password: string) =>
    set((state) => ({ password: password }), false, 'setPassword'),
  setPasswordConfirmation: (passwordConfirmation: string) =>
    set(
      (state) => ({ passwordConfirmation: passwordConfirmation }),
      false,
      'setPasswordConfirmation'
    ),
})

// export const useAppStore = create<AppState & AppActions>()(
//   persist(appStoreApi, { name: 'app-store', storage: jsonStorage })
// )

export const useAppStore = create<AppState & AppActions>()(
  devtools(
    persist(
      appStoreApi,

      {
        name: 'app-store',
        // storage: jsonStorage
      }
    )
  )
)
