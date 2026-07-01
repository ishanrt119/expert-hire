'use client';

import { useAuth } from '@/features/auth/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Profile</h1>
          <Link href="/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="font-semibold text-gray-500">First Name:</span>
              <p className="text-lg">{user.first_name}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-500">Last Name:</span>
              <p className="text-lg">{user.last_name}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-500">Email:</span>
              <p className="text-lg">{user.email}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-500">Role:</span>
              <p className="text-lg">{user.role}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
