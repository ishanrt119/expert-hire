'use client';

import { useEffect } from 'react';
import { useAuth } from '@/features/auth/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <nav className="bg-white dark:bg-zinc-900 border-b p-4 flex justify-between items-center shadow-sm">
        <div className="text-xl font-bold">ExpertHire AI</div>
        <Button variant="ghost" onClick={logout} className="flex gap-2">
          <LogOut size={16} />
          Logout
        </Button>
      </nav>
      <main className="max-w-7xl mx-auto p-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Welcome, {user.first_name} {user.last_name}!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              This is your ExpertHire AI dashboard. From here, you will be able to manage your resume, practice interviews, and track your progress in future modules.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
