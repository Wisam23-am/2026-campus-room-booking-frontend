import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login for demo
    setTimeout(() => {
      localStorage.setItem('authToken', 'demo-token');
      localStorage.setItem('userRole', 'user');
      navigate('/dashboard');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Branding (Desktop Only) */}
        <div className="hidden md:flex flex-col space-y-8">
          <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              alt="Modern university campus"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1427504494785-cdee173dcf80?w=600&h=400&fit=crop"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h2 className="text-white text-2xl font-bold">Campus Spaces</h2>
              <p className="text-white/90 text-sm">Collaborate, study, and innovate in premium facilities.</p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Manage your <span className="text-blue-600">academic schedule</span> efficiently.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              The Campus Room Booking System provides students and faculty with seamless access to study rooms, lecture
              halls, and laboratory spaces.
            </p>
          </div>
        </div>

        {/* Right Column: Login Form */}
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border border-slate-100 dark:border-slate-700">
            {/* Header */}
            <div className="mb-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-6 bg-blue-100 dark:bg-blue-900/30 px-3 py-2 rounded-lg w-fit">
                <span className="text-2xl">🎓</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white">CampusBooking</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
              <p className="text-slate-500 dark:text-slate-400">Please enter your details to sign in.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Institutional Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">✉️</span>
                  <input
                    type="email"
                    placeholder="name@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">🔒</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
                </label>
                <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">Or</span>
                </div>
              </div>

              {/* SSO Options */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  Outlook
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
