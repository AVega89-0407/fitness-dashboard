export default function StatCard({ label, value, trend, trendLabel }) {
  const isUp = trend === 'up';
  const isDown = trend === 'down';
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{label}</p>
      <p className="text-xl font-medium text-gray-800">{value}</p>
      {trendLabel && (
        <p className={`text-xs mt-1 ${isUp ? 'text-green-500' : isDown ? 'text-red-400' : 'text-gray-400'}`}>
          {isUp ? '↑' : isDown ? '↓' : '–'} {trendLabel}
        </p>
      )}
    </div>
  );
}