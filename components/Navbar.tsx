import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-semibold"
                >
                    A Woman Is...
                </Link>

                <div className="hidden md:flex gap-6 text-sm">
                    <a href="#explore">Explore</a>
                    <Link href="#about">About</Link>
                </div>
            </nav>
        </header>
    );
}