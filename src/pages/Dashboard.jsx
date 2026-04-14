import StepTracker from "../components/charts/StepTracker";
import WaterTracker from "../components/charts/WaterTracker";

function Dashboard() {
    return (
        <>
        <section>
        <StepTracker />
        <WaterTracker />
        </section>
        </>
    )
}

export default Dashboard;