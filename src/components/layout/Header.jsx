import { User } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-white shadow-sm p-4 mb-6 flex items-center gap-4 rounded-[2.5rem] border border-slate-100 ">
            <h1 className="text-2xl font-bold text-gray-800">Hälsospårning</h1>
                <User size={24} className="text-gray-500 ml-auto" />
        </header>
    )
}