import { StateStorage, createJSONStorage } from 'zustand/middleware'

const customSessionStorage: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    // console.log('getItem', name)
    const data = sessionStorage.getItem(name)
    return data
  },
  setItem: function (name: string, value: string): void | Promise<void> {
    // console.log('setItem', name, value)
    sessionStorage.setItem(name, value)
  },
  removeItem: function (name: string): void | Promise<void> {
    // console.log('removeItem', name)
    sessionStorage.removeItem(name)
  },
}
export const jsonStorage = createJSONStorage(() => customSessionStorage)
