import ActivityList from "../components/charts/ActivityList";
import ProgressCard from "../components/charts/ProgressCard";
import WeekBarChart from "../components/charts/WeekbarChart";
import Header from "../components/layout/Header";

const weekData = [
  { day: 'Mån', steps: 6200 },
  { day: 'Tis', steps: 8900 },
  { day: 'Ons', steps: 5100 },
  { day: 'Tor', steps: 9200 },
  { day: 'Fre', steps: 7000 },
  { day: 'Lör', steps: 0 },
  { day: 'Sön', steps: 0 },
];

const activities = [
  { type: 'running',  name: 'Morgonlöpning', time: 'Idag · 06:30–07:10',   kcal: 320 },
  { type: 'swimming', name: 'Simning',        time: 'Igår · 17:00–17:45',   kcal: 410 },
  { type: 'strength', name: 'Styrketräning',  time: 'Tisdag · 18:00–19:00', kcal: 280 },
];

function Dashboard() {
    return (
        <>
        <Header />
        <section className="grid grid-cols-3 gap-4">
        <ProgressCard label="Dagens steg" current={7000} max={8200} unit="steg" color="purple" />
                <ProgressCard label="Vattenintag 💧" current={1.5} max={2} unit="L" color="blue" note="Du har druckit 1,5 L av 2 L idag">
          <button className="mt-3 w-full bg-indigo-500 text-white rounded-xl py-2 text-sm font-medium hover:bg-indigo-600 transition-colors">
            Logga vattenintag
          </button>
        </ProgressCard>
        <ProgressCard label="Sömn 🌙" current={7.7} max={9} unit="t" color="violet" note="Insomningstid 23:04 · Uppvakningstid 06:46" />
        <ProgressCard label="Kalorier 🔥" current={1240} max={2000} unit="kcal" color="amber" note="Frukost + lunch loggat" />
        <WeekBarChart data={weekData} />
        <ActivityList activities={activities} />
        </section>
        </>
    )
}

export default Dashboard;