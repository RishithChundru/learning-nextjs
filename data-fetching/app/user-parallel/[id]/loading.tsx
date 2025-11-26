export default function Loading() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Loading user data...</h2>

      <div className="space-y-4">
        <div className="h-6 w-1/3 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 w-1/2 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 w-full bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
