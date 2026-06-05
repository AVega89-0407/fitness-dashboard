import StatCard from "../components/charts/StatCard"

export default function Statistik() {
  return (
    <div className="grid grid-cols-4 gap-3 p-6">
      <StatCard label="Totala steg" value="48 200" trend="up" trendLabel="+12% vs förra veckan" />
      <StatCard label="Aktiva dagar" value="5 / 7" trend="neutral" trendLabel="Samma som förra" />
      <StatCard label="Snitt sömn" value="7,4 t" trend="down" trendLabel="−0,3 t vs förra veckan" />
      <StatCard label="Kcal brända" value="2 140" trend="up" trendLabel="+8% vs förra veckan" />
    </div>
  )
}