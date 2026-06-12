import { sections } from "@/data/sections";
import chapterContent from "@/data/chapters";

import ChapterHero from "@/components/chapters/ChapterHero";
import QuoteBlock from "@/components/chapters/QuoteBlock";
import ReflectionBlock from "@/components/chapters/ReflectionBlock";

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

    const content =
        chapterContent[
        slug as keyof typeof chapterContent
        ] as { quote: string };

    return (
        <main className="max-w-4xl mx-auto px-6 py-20">
            <ChapterHero
                title={chapter.title}
                description={chapter.description}
            />

            <QuoteBlock
                quote={content.quote}
            />

            <ReflectionBlock
                text="This chapter is a living reflection on one dimension of womanhood. It explores experiences, emotions, responsibilities, hopes and realities that shape how women move through the world."
            />
        </main>
    );
}