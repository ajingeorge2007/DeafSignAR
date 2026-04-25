export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          DeafSignAR
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          AI-Powered Real-Time Communication Assistant for the Deaf & Hard-of-Hearing
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/voice"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Start Live Captions
          </a>

          <a
            href="/auth"
            className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Login
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">🎤 Live Speech</h3>
            <p className="text-gray-400">Convert speech into instant readable text.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast & Smart</h3>
            <p className="text-gray-400">Real-time AI captions with smooth experience.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">🌍 Inclusive</h3>
            <p className="text-gray-400">Built for accessibility and equal communication.</p>
          </div>
        </div>
      </div>
    </div>
  )
}