import Link from "next/link";

type SectionCardProps = {
    title: string;
    slug: string;
};

export default function SectionCard({
    title,
    slug,
}: SectionCardProps) {
    return (
        <Link
            href={`/chapters/${slug}`}
            className="group rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
        >
            <h3 className="text-2xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 text-sm text-gray-500">
                Explore this chapter →
            </p>
        </Link>
    );
}