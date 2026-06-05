import { Home, BarChart2, User, Settings, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ icon: Icon, label, active }) => (
<div className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all
    ${active 
        ? 'bg-accent text-white shadow-lg shadow-indigo-100' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-accent'}`}>
    <Icon size={22} />
    <span className="font-medium">{label}</span>
</div>
);

function Sidebar() {
    return (
    <aside className="w-64 bg-card h-screen sticky top-0 border-r border-slate-100 p-6 flex flex-col">
      {/* Logotyp / Appnamn */}
        <div className="flex items-center gap-3 px-4 mb-10">
        <div className="bg-accent p-2 rounded-xl">
            <Zap size={24} className="text-white" fill="currentColor" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-800">FlexFlow</h1>
        </div>

      {/* Navigering */}
    <nav className="flex-1 space-y-2">
        <NavLink to='/'>
        {({ isActive }) => (
        <NavItem icon={Home} label="Översikt" active={isActive}/>
          )}
        </NavLink>
        <NavLink to='statistik'>
            {({ isActive }) => (
            <NavItem icon={BarChart2} label="Statistik" active={isActive}/>
            )}
            </NavLink>
        <NavLink to='/profile'>
        {({ isActive }) => (
        <NavItem icon={User} label="Profil" active={isActive}/>
        )}
        </NavLink>
    </nav>

      {/* Nedre del */}
    <div className="pt-6 border-t border-slate-50">
        <NavLink to='/settings'>
        {({ isActive }) => (
        <NavItem icon={Settings} label="Inställningar" active={isActive}/>
        )}
        </NavLink>
    </div>
    </aside>
);
};

export default Sidebar;