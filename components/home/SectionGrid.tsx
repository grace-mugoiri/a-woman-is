import { sections } from "@/data/sections";
import SectionCard from "./SectionCard";

export default function SectionGrid() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-4xl mb-12">
                Explore Her World
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {sections.map((section) => (
                    <SectionCard
                        key={section.slug}
                        title={section.title}
                        slug={section.slug}
                    />
                ))}
            </div>
        </section>
    );
}