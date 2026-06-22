type Props = {
    text: string;
};

export default function ReflectionBlock({
    text,
}: Props) {
    return (
        <section className="my-12 panel-glow rounded-[2rem] border border-soft p-10">
            <p className="leading-8 text-lg text-slate-700">
                {text}
            </p>
        </section>
    );
}