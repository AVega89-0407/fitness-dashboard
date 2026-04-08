import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

function MainLayout() {
    return (
        <>
        <Sidebar />
        <Outlet />
        </>
    )
}

export default MainLayout