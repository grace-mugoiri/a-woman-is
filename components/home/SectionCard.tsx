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
            className="
        group
        rounded-3xl
        border
        bg-white
        p-8
        transition-all
        hover:-translate-y-2
        hover:shadow-xl
      "
        >
            <h3 className="text-2xl font-semibold">
                {title}
            </h3>

            <p className="mt-4 text-gray-500">
                Read this chapter
            </p>
        </Link>
    );
}