import Link from "next/link";
import { sections } from "@/data/sections";

export default function ChapterNavigation() {
    return (
        <section className="border-t border-soft mt-24 pt-12">
            <h3 className="text-2xl mb-8 text-purple-900">
                Continue Exploring
            </h3>

            <div className="flex flex-wrap gap-4">
                {sections.map((section) => (
                    <Link
                        key={section.slug}
                        href={`/chapters/${section.slug}`}
                        className="rounded-full border border-soft bg-pink-50 px-4 py-2 text-pink-900 transition hover:bg-pink-100"
                    >
                        {section.title}
                    </Link>
                ))}
            </div>
        </section>
    );
}