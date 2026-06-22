type Props = {
    text: string;
};

export default function ClosingThought({
    text,
}: Props) {
    return (
        <section className="my-24 text-center panel-glow rounded-[2rem] border border-soft p-12 fade-up">
            <p className="text-2xl italic text-pink-700">
                {text}
            </p>
        </section>
    );
}