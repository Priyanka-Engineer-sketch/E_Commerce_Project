'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import type { Role } from '@/types/rbac';
import {JSX, useEffect} from 'react';

export default function withRole<P extends JSX.IntrinsicAttributes>(
    C: React.ComponentType<P>,
    allowed: Role[]
) {
    return function Guard(props: P) {
        const { data, status } = useSession();
        const router = useRouter();
        const role = (data as any)?.role ?? 'user';

        useEffect(() => {
            if (status === 'unauthenticated') router.replace('/errors/401');
            else if (status === 'authenticated' && !allowed.includes(role)) router.replace('/errors/403');
        }, [status, role, router]);

        if (status !== 'authenticated' || !allowed.includes(role)) return null;
        return <C {...props} />;
    };
}
