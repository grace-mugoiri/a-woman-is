import Link from "next/link";
import { sections } from "@/data/sections";

export default function ChaptersPage() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-24">
            <section className="mb-16 panel-glow rounded-[2rem] border border-soft p-12">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-700/80">
                    Discover the chapters
                </p>
                <h1 className="text-6xl font-bold mt-4 text-purple-900">
                    Chapters
                </h1>

                <p className="mt-6 text-lg text-slate-600 max-w-3xl">
                    A collection of stories and reflections that explore the many
                    dimensions of womanhood. Select a chapter to read its full
                    journey.
                </p>
            </section>

            <div className="grid gap-8 md:grid-cols-2">
                {sections.map((section) => (
                    <Link
                        key={section.slug}
                        href={`/chapters/${section.slug}`}
                        className="rounded-[2rem] border border-soft bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <h2 className="text-3xl font-semibold mb-3 text-purple-900">
                            {section.title}
                        </h2>

                        <p className="text-slate-600">
                            {section.description}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
