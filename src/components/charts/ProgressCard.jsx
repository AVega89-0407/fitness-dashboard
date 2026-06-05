export default function ProgressCard({ label, current, max, unit, color, icon, note, children }) {
  const pct = Math.round((current / max) * 100);

  const colors = {
    purple: { bar: 'bg-indigo-500', text: 'text-indigo-500', badge: 'bg-indigo-100 text-indigo-700' },
    blue:   { bar: 'bg-blue-500',   text: 'text-blue-500',   badge: 'bg-blue-100 text-blue-700' },
    violet: { bar: 'bg-violet-500', text: 'text-violet-500', badge: 'bg-violet-100 text-violet-700' },
    amber:  { bar: 'bg-amber-500',  text: 'text-amber-500',  badge: 'bg-amber-100 text-amber-700' },
  };
  const c = colors[color] ?? colors.purple;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="flex font-medium text-gray-800">
         <p>{label}</p> <p>{icon}</p>
        </span>
        <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
          {pct}%
        </span>
      </div>

      {note && <p className="text-xs text-gray-400 mb-1">{note}</p>}

      <div className="h-2 bg-gray-100 rounded-full my-2 overflow-hidden">
        <div
          className={`h-full rounded-full ${c.bar} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400">
        <span>{current.toLocaleString('sv')} / {max.toLocaleString('sv')} {unit}</span>
      </div>

      {children}
    </div>
  );
}