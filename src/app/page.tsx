import Image from 'next/image'
import { Header } from './components/Header'
import { BackgroundSVG } from './components/BackgroundSVG'

export default function Home() {
  return (
    <div className="bg-background min-h-screen relative ">
      <BackgroundSVG />
      <Header />
      <div className="mx-auto max-w-large ">
        <main className="flex items-center justify-between mt-5 z-20">
          <section className="space-y-16">
            <div className="space-y-7">
              <h1 className="text-gray300 text-4xl font-bold">
                Mutual Investment
              </h1>
              <p className="text-gray300 text-lg leading-relaxed w-[459px]">
                At Finance we care about your future. We help you invest the way
                you want. So you can relax, have fun and let your fund grow.
              </p>
            </div>

            <div className="flex flex-col items-center w-ButtonLg">
              <button className="bg-green200 text-white text-2xl w-full py-3 rounded-full font-semibold">
                Learn more
              </button>
              <span className="h-[2px] w-1/3 bg-green200 mt-4 rounded-full"></span>
            </div>
          </section>

          <section>
            <Image
              src="/imgs/bg-login.png"
              width={560}
              height={560}
              alt="homem com dinheiro ilustração"
            />
          </section>
        </main>
      </div>
    </div>
  )
}
