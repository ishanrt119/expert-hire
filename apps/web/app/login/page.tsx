'use client';

import { useState } from 'react';
import { useAuth } from '@/features/auth/AuthContext';
import { api } from '@/lib/axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await api.post('/api/auth/login', { email, password });
      login(data.access_token);
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      {/* Immersive Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full pointer-events-none animate-pulse duration-10000" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse duration-10000 delay-1000" />
      <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Glassmorphism Container */}
      <div className="w-full max-w-md p-8 z-10 animate-in fade-in zoom-in-95 duration-500">
        <div className="mb-10 text-center flex flex-col items-center">
          <Link href="/">
            <div className="bg-primary/10 p-3 rounded-2xl mb-6 inline-flex hover:bg-primary/20 transition-colors cursor-pointer">
              <Brain className="w-8 h-8 text-primary" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue your interview prep</p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-background/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 rounded-3xl p-8 shadow-2xl">
            <form onSubmit={onSubmit} className="space-y-5">
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl text-sm animate-in slide-in-from-top-2">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-semibold pl-1" htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 px-4 rounded-xl bg-background/50 border-border/50 focus-visible:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between pl-1">
                  <label className="text-sm font-semibold" htmlFor="password">Password</label>
                  <Link href="#" className="text-xs font-medium text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 px-4 rounded-xl bg-background/50 border-border/50 focus-visible:ring-primary/50 transition-all"
                />
              </div>
              <Button 
                className="w-full h-12 text-base font-semibold rounded-xl mt-4 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 group" 
                type="submit" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/register" className="font-semibold text-primary hover:underline transition-colors">
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
