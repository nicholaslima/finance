import { Header } from './components/Header'

export default function Home() {
  return (
    <div className="h-screen bg-background">
      <Header />
      <main>
        <h1 className="text-blue">Mutual Investment</h1>
        <p>
          At Finance we care about your future. We help you invest the way you
          want. So you can relax, have fun and let your fund grow.
        </p>
        <button>Learn more</button>
      </main>
    </div>
  )
}
