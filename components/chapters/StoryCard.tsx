type Props = {
    title: string;
    excerpt: string;
};

export default function StoryCard({
    title,
    excerpt,
}: Props) {
    return (
        <article className="rounded-3xl border p-8">
            <h3 className="text-2xl mb-4">
                {title}
            </h3>

            <p className="text-gray-600">
                {excerpt}
            </p>
        </article>
    );
}