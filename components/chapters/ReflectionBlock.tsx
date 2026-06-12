type Props = {
    text: string;
};

export default function ReflectionBlock({
    text,
}: Props) {
    return (
        <section className="my-12">
            <p className="leading-8 text-lg">
                {text}
            </p>
        </section>
    );
}