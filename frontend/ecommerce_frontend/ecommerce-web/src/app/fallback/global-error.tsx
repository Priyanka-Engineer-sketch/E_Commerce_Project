'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <main className="text-center my-5">
            <h1>Something went wrong</h1>
            <p>{error.message ?? 'An unexpected error occurred.'}</p>
            <button className="btn btn-danger mt-3" onClick={reset}>
                Try Again
            </button>
        </main>
    );
}
