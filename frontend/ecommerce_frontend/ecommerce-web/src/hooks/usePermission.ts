'use client';
import { useSession } from 'next-auth/react';
import { hasPermission } from '@/lib/permissions';
import type { Permission } from '@/types/rbac';

export default function usePermission(perm: Permission) {
    const { data } = useSession();
    return hasPermission((data as any)?.role, perm);
}
