import Image from "next/image";
import Link from "next/link";
import { sections } from "@/data/sections";
import { chapterImages } from "@/data/chapterImages";

export default function ChaptersPage() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-24">
            <Link href="/" className="text-pink-700 hover:text-pink-800 text-sm mb-6 inline-block">
                ← Back home
            </Link>

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
                {sections.map((section, index) => (
                    <Link
                        key={section.slug}
                        href={`/chapters/${section.slug}`}
                        className="group overflow-hidden rounded-[2rem] border border-soft bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg fade-up"
                        style={{ animationDelay: `${index * 90}ms` }}
                    >
                        <div className="relative h-40 overflow-hidden bg-slate-100">
                            <Image
                                src={chapterImages[section.slug as keyof typeof chapterImages]}
                                alt={section.title}
                                fill
                                sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) calc(50vw - 24px), 250px"
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        <div className="p-8">
                            <h2 className="text-3xl font-semibold mb-3 text-purple-900">
                                {section.title}
                            </h2>

                            <p className="text-slate-600">
                                {section.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
