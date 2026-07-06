import Link from 'next/link';
import { promises as fs } from 'fs';
import { join } from 'path';

const storiesFile = join(process.cwd(), 'data', 'stories.json');

async function getStories() {
    try {
        const data = await fs.readFile(storiesFile, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function formatDate(isoString: string) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default async function StoriesPage() {
    const stories = await getStories();

    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <section className="mb-12 panel-glow rounded-[2rem] border border-soft p-12">
                <Link href="/" className="text-pink-700 hover:text-pink-800 text-sm mb-4 inline-block">
                    ← Back home
                </Link>

                <h1 className="text-6xl font-bold mt-4 text-purple-900 mb-4">
                    Women's Stories
                </h1>

                <p className="text-lg text-slate-600 max-w-2xl">
                    Real experiences. Real voices. Anonymous stories from women sharing their journeys.
                </p>

                <Link
                    href="/submit-story"
                    className="mt-6 inline-flex px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold transition hover:shadow-lg"
                >
                    Share Your Story
                </Link>
            </section>

            {stories.length === 0 ? (
                <section className="panel-glow rounded-[2rem] border border-soft p-12 text-center">
                    <p className="text-lg text-slate-600 mb-6">
                        No stories yet. Be the first to share yours.
                    </p>
                    <Link
                        href="/submit-story"
                        className="inline-flex px-6 py-3 rounded-full border border-soft bg-purple-50 text-purple-900 font-semibold transition hover:bg-purple-100"
                    >
                        Write the First Story
                    </Link>
                </section>
            ) : (
                <div className="space-y-6">
                    {stories.map((story: any, index: number) => (
                        <article
                            key={story.id}
                            className="panel-glow rounded-[2rem] border border-soft p-8 fade-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h2 className="text-3xl font-semibold text-purple-900 flex-1">
                                    {story.title}
                                </h2>
                                <span className="text-sm text-slate-500 ml-4 flex-shrink-0">
                                    {formatDate(story.timestamp)}
                                </span>
                            </div>

                            <p className="text-lg leading-8 text-slate-700 whitespace-pre-wrap">
                                {story.content}
                            </p>

                            <div className="mt-6 pt-6 border-t border-soft flex items-center gap-6">
                                <span className="text-sm text-slate-500">
                                    Shared anonymously
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </main>
    );
}
