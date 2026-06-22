type Props = {
    title: string;
    description: string;
};

export default function ChapterHero({
    title,
    description,
}: Props) {
    return (
        <section className="py-20 panel-glow rounded-[2rem] border border-soft p-10 mb-12 fade-up">
            <h1 className="text-6xl mb-6 text-purple-900">
                {title}
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl">
                {description}
            </p>
        </section>
    );
}