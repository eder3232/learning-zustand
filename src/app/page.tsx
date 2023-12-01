import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Eder!</h1>
      Hola!
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}
