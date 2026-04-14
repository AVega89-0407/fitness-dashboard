function StepTracker() {
    return (
    <section className="p-8 max-w-md mx-auto">
        <article className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Dagens steg</h2>
            <p className="text-accent font-bold">85%</p>
        </div>
        
        {/* En enkel minimalistisk progress bar */}
        <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
            <div className="bg-accent h-full w-[85%] rounded-full transition-all duration-1000"></div>
        </div>
        
        <p className="mt-4 text-slate-500 text-sm">
            Bara 1 200 steg kvar till ditt mål!
        </p>
        </article>
    </section>
);
}

export default StepTracker;