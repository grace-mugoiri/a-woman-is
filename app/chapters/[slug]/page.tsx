import { sections } from "@/data/sections";
import { notFound } from "next/navigation";

export default async function ChapterPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const chapter = sections.find(
        (item) => item.slug === slug
    );

    if (!chapter) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-6xl mb-6">
                {chapter.title}
            </h1>

            <p className="text-xl text-gray-600">
                Stories and reflections coming soon.
            </p>
        </main>
    );
}