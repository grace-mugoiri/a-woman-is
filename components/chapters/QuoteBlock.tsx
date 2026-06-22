type Props = {
    quote: string;
};

export default function QuoteBlock({
    quote,
}: Props) {
    return (
        <blockquote className="my-16 text-center panel-glow rounded-[2rem] border border-soft p-10">
            <p className="text-3xl italic text-purple-900">
                "{quote}"
            </p>
        </blockquote>
    );
}