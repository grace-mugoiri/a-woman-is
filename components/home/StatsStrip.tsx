export default function StatsStrip() {
    return (
        <section className="py-12 my-24">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                <div className="panel-glow rounded-3xl border border-soft p-8">
                    <h3 className="text-4xl text-purple-900">8</h3>
                    <p className="text-slate-600">Dimensions of Womanhood</p>
                </div>

                <div className="panel-glow rounded-3xl border border-soft p-8">
                    <h3 className="text-4xl text-purple-900">∞</h3>
                    <p className="text-slate-600">Stories Untold</p>
                </div>

                <div className="panel-glow rounded-3xl border border-soft p-8">
                    <h3 className="text-4xl text-purple-900">1</h3>
                    <p className="text-slate-600">Shared Humanity</p>
                </div>
            </div>
        </section>
    );
}