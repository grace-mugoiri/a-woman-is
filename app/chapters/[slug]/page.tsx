import { sections } from "@/data/sections";
import { notFound } from "next/navigation";
import ChapterNavigation from "@/components/chapters/ChapterNavigation";
import ChapterHero from "@/components/chapters/ChapterHero";
import QuoteBlock from "@/components/chapters/QuoteBlock";
import ReflectionBlock from "@/components/chapters/ReflectionBlock";
import StorySection from "@/components/chapters/StorySection";
import ClosingThought from "@/components/chapters/ClosingThought";
import { chapters } from "@/content/chapters";

export default async function ChapterPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const content = chapters[slug as keyof typeof chapters];
    const section = sections.find((item) => item.slug === slug);

    if (!content || !section) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto px-6 py-24 panel-glow rounded-[2.5rem] border border-soft">
            <ChapterHero
                title={content.title}
                description={section.description}
            />

            <QuoteBlock quote={content.quote} />

            <ReflectionBlock text={content.reflection} />

            <div className="space-y-16">
                {content.stories.map((story) => (
                    <StorySection
                        key={story.title}
                        title={story.title}
                        content={story.content}
                    />
                ))}
            </div>

            <ClosingThought text={content.closingThought} />

            <ChapterNavigation currentSlug={slug} />
        </main>
    );
}
