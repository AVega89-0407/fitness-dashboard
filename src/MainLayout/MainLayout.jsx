import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

function MainLayout() {
    return (
        <>
        <section className="flex min-h-screen bg-mist-50">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
            <section className="max-w-7xl mx-auto">
            <Outlet />
            </section>
        </main>
        </section>
        </>
    )
}

export default MainLayout