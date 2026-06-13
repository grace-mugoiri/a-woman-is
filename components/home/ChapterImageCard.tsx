import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    slug: string;
    image: string;
};

export default function ChapterImageCard({
    title,
    slug,
    image,
}: Props) {
    return (
        <Link
            href={`/chapters/${slug}`}
            className="group overflow-hidden rounded-3xl border bg-white"
        >
            <div className="relative h-72">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-6">
                <h3 className="text-2xl">
                    {title}
                </h3>

                <p className="mt-2 text-gray-500">
                    Explore chapter →
                </p>
            </div>
        </Link>
    );
}