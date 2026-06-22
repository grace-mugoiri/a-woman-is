export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-[radial-gradient(circle_at_top,_rgba(248,191,255,0.35),transparent_35%),radial-gradient(circle_at_15%_20%,rgba(129,140,248,0.15),transparent_30%)]">
            <div className="max-w-6xl mx-auto px-6 py-24">
                <div className="panel-glow rounded-[2.5rem] border border-soft p-12 shadow-xl reveal-hero">
                    <p className="text-sm uppercase tracking-[0.35em] text-pink-700/80">
                        A woman is many things
                    </p>

                    <h1 className="mt-6 text-6xl md:text-7xl font-bold text-purple-900">
                        A Woman Is...
                    </h1>

                    <p className="mt-6 text-2xl italic text-pink-800/90">
                        Many stories. One truth.
                    </p>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                        A space that honors every version of a woman's journey.
                        Her silent battles. Her loud victories. Her everyday magic.
                    </p>
                </div>
            </div>
        </section>
    );
}