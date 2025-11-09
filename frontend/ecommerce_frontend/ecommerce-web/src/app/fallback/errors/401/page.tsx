export default function UnauthorizedPage() {
    return (
        <main className="text-center my-5">
            <h1>401 - Unauthorized</h1>
            <p>You must be signed in to view this page.</p>
            <a href="/login" className="btn btn-primary mt-3">Sign In</a>
        </main>
    );
}
