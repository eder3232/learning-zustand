import { type StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TaskStatus = 'open' | 'in-progress' | 'done'

type Task = {
  id: string
  title: string
  description: string
  status: TaskStatus
}
type TodoState = {
  open: Task[]
  inProgress: Task[]
  done: Task[]
}

type TodoActions = {}

const todoStoreApi: StateCreator<
  TodoState & TodoActions,
  [['zustand/devtools', never]]
> = (set, get) => ({
  open: [],
  inProgress: [],
  done: [],
})

export const useTodoStore = create<TodoState & TodoActions>()(
  devtools(todoStoreApi)
)
