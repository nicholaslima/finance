import { Overpass } from 'next/font/google'
import './globals.css'
const overpass = Overpass({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={overpass.className}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}
