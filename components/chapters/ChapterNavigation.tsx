import Link from "next/link";
import { sections } from "@/data/sections";

export default function ChapterNavigation() {
    return (
        <section className="border-t mt-24 pt-12">
            <h3 className="text-2xl mb-8">
                Continue Exploring
            </h3>

            <div className="flex flex-wrap gap-4">
                {sections.map((section) => (
                    <Link
                        key={section.slug}
                        href={`/chapters/${section.slug}`}
                        className="rounded-full border px-4 py-2 hover:bg-gray-100"
                    >
                        {section.title}
                    </Link>
                ))}
            </div>
        </section>
    );
}