type Props = {
    title: string;
    description: string;
};

export default function ChapterHero({
    title,
    description,
}: Props) {
    return (
        <section className="py-20">
            <h1 className="text-6xl mb-6">
                {title}
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl">
                {description}
            </p>
        </section>
    );
}