type Props = {
    title: string;
    content: string;
};

export default function StorySection({
    title,
    content,
}: Props) {
    return (
        <section className="my-16">
            <h2 className="text-3xl mb-6">
                {title}
            </h2>

            <p className="leading-8 text-lg">
                {content}
            </p>
        </section>
    );
}