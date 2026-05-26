import StepTracker from "../components/charts/StepTracker";
import WaterTracker from "../components/charts/WaterTracker";

function Dashboard() {
    return (
        <>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StepTracker />
        <WaterTracker />
        </section>
        </>
    )
}

export default Dashboard;