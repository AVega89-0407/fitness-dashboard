export default function WeekBarChart({ data }) {
  // data = [{ day: 'Mån', steps: 6200 }, ...]
  const max = Math.max(...data.map(d => d.steps));
  const today = new Date().getDay(); // 0=sön, 1=mån ...
  const dayIndex = { 'Mån':1,'Tis':2,'Ons':3,'Tor':4,'Fre':5,'Lör':6,'Sön':0 };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <h3 className="font-medium text-gray-800 mb-4">Veckans steg</h3>
      <div className="flex items-end gap-1.5 h-20">
        {data.map((d) => {
          const height = d.steps > 0 ? Math.round((d.steps / max) * 100) : 8;
          const isToday = dayIndex[d.day] === today;
          return (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
              <div
                title={`${d.steps.toLocaleString('sv')} steg`}
                className={`w-full rounded-t-sm transition-all ${
                  isToday ? 'bg-indigo-500' : 'bg-indigo-100 hover:bg-indigo-300'
                }`}
                style={{ height: `${height}%` }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-1">
        {data.map(d => (
          <span key={d.day} className="flex-1 text-center text-[10px] text-gray-400">{d.day}</span>
        ))}
      </div>
    </div>
  );
}