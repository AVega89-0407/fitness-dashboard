import { Droplet } from 'lucide-react';

function WaterTracker() {
    return (
        <section className="p-8 max-w-md mx-auto flex-1">
            <article className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Dagens vattenintag</h2>
                    <Droplet className="text-accent" />
                    <p className="text-accent font-bold">75%</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">Du har druckit 1.5L av 2L idag</p>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div className="bg-accent h-4 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <button className="w-full bg-accent text-white py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Logga vattenintag</button>
            </article>
        </section>
    );
}

export default WaterTracker;