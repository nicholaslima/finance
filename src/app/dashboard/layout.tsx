export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-layout bg-blue800 h-screen font-sans">
      <aside className="bg-blue700 h-full rounded-r-3xl">aside</aside>
      <main className="px-6 pt-9">{children}</main>
    </div>
  )
}
