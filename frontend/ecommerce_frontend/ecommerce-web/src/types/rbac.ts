export type Role = 'user' | 'seller' | 'admin';
export type Permission =
    | 'VIEW_PRODUCTS' | 'BUY' | 'MANAGE_OWN_PRODUCTS' | 'FULFILL_OWN_ORDERS'
    | 'MANAGE_USERS' | 'MANAGE_ALL_PRODUCTS' | 'MANAGE_ALL_ORDERS' | 'VIEW_ANALYTICS' | 'MANAGE_SETTINGS';

export type RolePermissions = Record<Role, Permission[]>;
