export default function Dashboard() {
  return (
    <header className="flex align-center justify-between">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-white">Welcome Back, Ali</h1>
        <p className="text-gray-500 font-normal text-base">
          Here’s what’s happening with your store today.
        </p>
      </div>
      <input
        type="text"
        className="w-1/2 rounded-xl bg-blue700 text-gray200 px-6 py-3 outline-none"
        placeholder="Search for anything...."
      />
    </header>
  )
}
