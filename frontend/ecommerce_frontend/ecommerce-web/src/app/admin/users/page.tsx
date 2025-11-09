'use client';


import withRole from "@/app/components/hoc/withRole";

function UsersPage() {
    const demoUsers = [
        { id: 1, name: 'Admin', email: 'admin@example.com', role: 'admin' },
        { id: 2, name: 'Seller', email: 'seller@example.com', role: 'seller' },
        { id: 3, name: 'User', email: 'user@example.com', role: 'user' },
    ];

    return (
        <div>
            <h2>Users</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th><th>Email</th><th>Role</th>
                </tr>
                </thead>
                <tbody>
                {demoUsers.map(u => (
                    <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default withRole(UsersPage, ['admin']);
