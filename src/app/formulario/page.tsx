'use client'
import { useAppStore } from '@/shared/store/app-store'

const Page = () => {
  const name = useAppStore((state) => state.name)
  const email = useAppStore((state) => state.email)
  const password = useAppStore((state) => state.password)
  const paswordConfirmation = useAppStore((state) => state.passwordConfirmation)

  const setName = useAppStore((state) => state.setName)
  const setEmail = useAppStore((state) => state.setEmail)
  const setPassword = useAppStore((state) => state.setPassword)
  const setPasswordConfirmation = useAppStore(
    (state) => state.setPasswordConfirmation
  )

  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col gap-2 p-2 bg-neutral w-80">
        <h1>Formulario</h1>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password2">Repetir contraseña</label>
        <input
          type="password"
          id="password2"
          name="password2"
          value={paswordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Page
