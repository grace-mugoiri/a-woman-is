import { sections } from "@/data/sections";
import { chapterImages } from "@/data/chapterImages";

import ChapterImageCard from "./ChapterImageCard";

export default function FeaturedChapters() {
    return (
        <section id="explore" className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
                <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-pink-700/80">
                        Featured chapters
                    </p>
                    <h2 className="text-5xl font-semibold text-purple-900">
                        Explore Her World
                    </h2>
                </div>

                <p className="max-w-xl text-slate-600">
                    A gentle celebration of the chapters that shape a woman's story.
                    Click through to read reflections, stories, and quiet moments.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {sections.map((section) => (
                    <ChapterImageCard
                        key={section.slug}
                        title={section.title}
                        slug={section.slug}
                        image={chapterImages[section.slug as keyof typeof chapterImages]}
                    />
                ))}
            </div>
        </section>
    );
}
