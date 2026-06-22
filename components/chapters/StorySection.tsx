type Props = {
    title: string;
    content: string;
};

export default function StorySection({
    title,
    content,
}: Props) {
    return (
        <section className="my-16 panel-glow rounded-[2rem] border border-soft p-10">
            <h2 className="text-3xl mb-6 text-purple-900">
                {title}
            </h2>

            <p className="leading-8 text-lg text-slate-700">
                {content}
            </p>
        </section>
    );
}