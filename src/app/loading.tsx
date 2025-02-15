export default function Loading() {
    return (
        <div className="flex justify-center items-center h-[400px]">
            <div
                className="mt-16 animate-spin h-12 w-12 border-4 border-green-600 rounded-full border-t-transparent"
                role="status"
                aria-label="Loading"
            />
            <span className="sr-only">Loading...</span>
        </div>
    );
}
