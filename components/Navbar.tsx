import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-soft shadow-sm">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-semibold text-pink-700"
                >
                    A Woman Is...
                </Link>

                <div className="hidden md:flex gap-4 text-sm text-pink-800/90">
                    <Link
                        href="/chapters"
                        className="rounded-full bg-pink-100 px-4 py-2 transition hover:bg-pink-200"
                    >
                        Chapters
                    </Link>
                    <Link
                        href="/stories"
                        className="rounded-full bg-purple-100 px-4 py-2 transition hover:bg-purple-200"
                    >
                        Stories
                    </Link>
                    <Link
                        href="/submit-story"
                        className="rounded-full bg-gradient-to-r from-pink-300 to-purple-300 px-4 py-2 font-semibold transition hover:shadow-md"
                    >
                        Share Story
                    </Link>
                    <Link
                        href="#about"
                        className="rounded-full bg-purple-100 px-4 py-2 transition hover:bg-purple-200"
                    >
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}