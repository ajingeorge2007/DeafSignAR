import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          DeafSignAR
        </h1>

        <p className="text-gray-400 text-center mb-8">
          {isLogin ? "Welcome back" : "Create your account"}
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-2xl bg-white/10 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-2xl bg-white/10 text-white outline-none"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 text-blue-400 w-full"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}