import { sections } from "@/data/sections";
import { chapterImages } from "@/data/chapterImages";

import ChapterImageCard from "./ChapterImageCard";

export default function FeaturedChapters() {
    return (
        <section id="explore" className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-5xl mb-12">
                Explore Her World
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {sections.map((section) => (
                    <ChapterImageCard
                        key={section.slug}
                        title={section.title}
                        slug={section.slug}
                        image={
                            chapterImages[
                                section.slug as keyof typeof chapterImages
                            ]
                        }
                    />
                ))}
            </div>
        </section>
    );
}
