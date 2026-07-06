'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingStoryButton() {
    const pathname = usePathname();

    // Don't show on submit-story or stories pages
    if (pathname === '/submit-story' || pathname === '/stories') {
        return null;
    }

    return (
        <Link
            href="/submit-story"
            className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-2xl transition hover:shadow-3xl hover:scale-110 hover:-translate-y-1 fade-up"
            title="Share your story"
        >
            <span className="text-2xl">+</span>
        </Link>
    );
}
