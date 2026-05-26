import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

function MainLayout() {
    return (
        // Vi skapar en grid med två kolumner: en för Sidebar och en för resten
        <div className="grid grid-cols-[auto_1fr] min-h-screen w-full bg-slate-50">
            
            {/* Sidebar tar sin naturliga bredd (w-64) */}
            <Sidebar />

            {/* Höger sida: En flex-container för att stapla Header och Main vertikalt */}
            <div className="flex flex-col h-screen overflow-hidden">
                
                {/* Header ligger överst */}
                <div className="p-4 md:p-6">
                    <Header />
                </div>

                {/* Main är scrollbar och fyller resten av ytan */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-0">
                    <section className="max-w-7xl mx-auto w-full">
                        <Outlet />
                    </section>
                </main>
            </div>
        </div>
    )
}

export default MainLayout;