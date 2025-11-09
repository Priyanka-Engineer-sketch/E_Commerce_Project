'use client';

import { useSession } from 'next-auth/react';

export default function ProfilePage() {
    const { data: session, status } = useSession();

    if (status === 'loading') return <p>Loading profile...</p>;
    if (!session) return <p>You must be logged in to see this page.</p>;

    return (
        <div>
            <h1>Your Profile</h1>
            <p><strong>Name:</strong> {session.user?.name}</p>
            <p><strong>Email:</strong> {session.user?.email}</p>
            {/* Extend here with addresses, notifications, preferences */}
        </div>
    );
}
