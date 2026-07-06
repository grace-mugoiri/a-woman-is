'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SubmitStoryPage() {
    const [story, setStory] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!story.trim() || !title.trim()) {
            setError('Please fill in both title and story');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/submit-story', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title.trim(),
                    content: story.trim(),
                    timestamp: new Date().toISOString(),
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to submit story');
            }

            setSuccess(true);
            setTitle('');
            setStory('');

            setTimeout(() => {
                router.push('/stories');
            }, 2000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="max-w-3xl mx-auto px-6 py-24">
            <section className="mb-12 panel-glow rounded-[2rem] border border-soft p-12">
                <Link href="/" className="text-pink-700 hover:text-pink-800 text-sm mb-4 inline-block">
                    ← Back home
                </Link>

                <h1 className="text-6xl font-bold mt-4 text-purple-900 mb-4">
                    Share Your Story
                </h1>

                <p className="text-lg text-slate-600 max-w-2xl">
                    Your story matters. Share a moment, a reflection, or an experience that defines
                    your journey as a woman. Submit anonymously and inspire others.
                </p>
            </section>

            <section className="panel-glow rounded-[2rem] border border-soft p-12 fade-up">
                {success ? (
                    <div className="text-center py-8">
                        <h2 className="text-2xl font-semibold text-green-600 mb-4">
                            ✓ Thank you for sharing!
                        </h2>
                        <p className="text-slate-600">
                            Your story has been submitted. Redirecting to view all stories...
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-purple-900 mb-2">
                                Story Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Give your story a title..."
                                className="w-full px-4 py-3 rounded-[1.5rem] border border-soft bg-white/80 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
                                maxLength={100}
                            />
                            <p className="text-xs text-slate-500 mt-1">{title.length}/100</p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-purple-900 mb-2">
                                Your Story
                            </label>
                            <textarea
                                value={story}
                                onChange={(e) => setStory(e.target.value)}
                                placeholder="Share your story here... (min 20 characters)"
                                rows={10}
                                className="w-full px-4 py-3 rounded-[1.5rem] border border-soft bg-white/80 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
                                maxLength={2000}
                            />
                            <p className="text-xs text-slate-500 mt-1">{story.length}/2000</p>
                        </div>

                        {error && (
                            <div className="p-4 rounded-[1.5rem] bg-red-50 border border-red-200">
                                <p className="text-red-700">{error}</p>
                            </div>
                        )}

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold transition hover:shadow-lg disabled:opacity-50"
                            >
                                {loading ? 'Submitting...' : 'Share My Story'}
                            </button>

                            <Link
                                href="/stories"
                                className="flex-1 px-6 py-3 rounded-full border border-soft bg-white/90 text-purple-900 font-semibold text-center transition hover:bg-purple-50"
                            >
                                View All Stories
                            </Link>
                        </div>

                        <p className="text-xs text-slate-500 text-center">
                            Your story will be posted anonymously. No personal information will be collected.
                        </p>
                    </form>
                )}
            </section>
        </main>
    );
}
