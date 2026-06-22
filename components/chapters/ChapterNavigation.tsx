import Link from "next/link";
import { sections } from "@/data/sections";

type Props = {
    currentSlug?: string;
};

export default function ChapterNavigation({ currentSlug }: Props) {
    const currentIndex = sections.findIndex((item) => item.slug === currentSlug);
    const previous = currentIndex > 0 ? sections[currentIndex - 1] : null;
    const next = currentIndex >= 0 && currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

    return (
        <section className="border-t border-soft mt-24 pt-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-2xl mb-3 text-purple-900">Continue Exploring</h3>
                    <p className="text-slate-600 max-w-2xl">
                        Move through the chapters at your own pace, or return to the chapter list.
                    </p>
                </div>

                <Link
                    href="/chapters"
                    className="inline-flex items-center rounded-full border border-soft bg-white/90 px-5 py-2 text-sm font-medium text-purple-900 transition hover:bg-purple-50"
                >
                    Back to chapters
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-10">
                {previous ? (
                    <Link
                        href={`/chapters/${previous.slug}`}
                        className="rounded-[1.75rem] border border-soft bg-pink-50 px-6 py-5 text-left transition hover:bg-pink-100"
                    >
                        <p className="text-sm text-slate-500">Previous chapter</p>
                        <p className="mt-2 text-lg font-semibold text-purple-900">{previous.title}</p>
                    </Link>
                ) : (
                    <div className="rounded-[1.75rem] border border-soft bg-white/80 px-6 py-5 text-left text-slate-500">
                        <p className="text-sm">Previous chapter</p>
                        <p className="mt-2 text-lg font-semibold text-purple-900">Start here</p>
                    </div>
                )}

                {next ? (
                    <Link
                        href={`/chapters/${next.slug}`}
                        className="rounded-[1.75rem] border border-soft bg-purple-50 px-6 py-5 text-left transition hover:bg-purple-100"
                    >
                        <p className="text-sm text-slate-500">Next chapter</p>
                        <p className="mt-2 text-lg font-semibold text-purple-900">{next.title}</p>
                    </Link>
                ) : (
                    <div className="rounded-[1.75rem] border border-soft bg-white/80 px-6 py-5 text-left text-slate-500">
                        <p className="text-sm">Next chapter</p>
                        <p className="mt-2 text-lg font-semibold text-purple-900">You’re at the latest story</p>
                    </div>
                )}
            </div>
        </section>
    );
}