export default function ServerErrorPage() {
    return (
        <main className="text-center my-5">
            <h1>500 - Server Error</h1>
            <p>An internal server error occurred. Please try again later.</p>
            <a href="/" className="btn btn-primary mt-3">Back to Home</a>
        </main>
    );
}
