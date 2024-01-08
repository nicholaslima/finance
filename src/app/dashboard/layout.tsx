export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-layout bg-blue800 h-screen">
      <aside className="bg-blue700 h-full rounded-3xl">aside</aside>
      <main>{children}</main>
    </div>
  )
}
