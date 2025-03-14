'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://voxpro-waitlist-worker.aktivbrain.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for joining our waitlist!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:border-voxpro-coral/50 transition-all"
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full bg-gradient-to-r from-voxpro-coral to-voxpro-coral-light text-voxpro-navy px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-voxpro-coral/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>
      {message && (
        <div className={`text-center text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </div>
      )}
    </form>
  );
} 