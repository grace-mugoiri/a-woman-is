type Props = {
    text: string;
};

export default function ClosingThought({
    text,
}: Props) {
    return (
        <section className="my-24 text-center">
            <p className="text-2xl italic">
                {text}
            </p>
        </section>
    );
}