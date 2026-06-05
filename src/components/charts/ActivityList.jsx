const iconMap = {
  running:  { bg: 'bg-indigo-100', color: 'text-indigo-500', icon: '🏃' },
  swimming: { bg: 'bg-blue-100',   color: 'text-blue-500',   icon: '🏊' },
  strength: { bg: 'bg-amber-100',  color: 'text-amber-500',  icon: '🏋️' },
  cycling:  { bg: 'bg-green-100',  color: 'text-green-500',  icon: '🚴' },
};

export default function ActivityList({ activities }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <h3 className="font-medium text-gray-800 mb-3">Senaste aktiviteter</h3>
      <ul className="flex flex-col gap-2">
        {activities.map((a, i) => {
          const style = iconMap[a.type] ?? iconMap.running;
          return (
            <li key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base ${style.bg}`}>
                {style.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{a.name}</p>
                <p className="text-xs text-gray-400">{a.time}</p>
              </div>
              <span className="text-xs text-gray-400">{a.kcal} kcal</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}