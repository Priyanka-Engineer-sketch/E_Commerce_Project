import type { RolePermissions, Permission } from '@/types/rbac';

export const ROLE_PERMS: RolePermissions = {
    user:   ['VIEW_PRODUCTS','BUY'],
    seller: ['VIEW_PRODUCTS','MANAGE_OWN_PRODUCTS','FULFILL_OWN_ORDERS'],
    admin:  ['VIEW_PRODUCTS','BUY','MANAGE_USERS','MANAGE_ALL_PRODUCTS','MANAGE_ALL_ORDERS','VIEW_ANALYTICS','MANAGE_SETTINGS']
};

export const hasPermission = (role: string | undefined, perm: Permission) =>
    role ? ROLE_PERMS[role as keyof typeof ROLE_PERMS]?.includes(perm) : false;
