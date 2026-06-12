type Props = {
    quote: string;
};

export default function QuoteBlock({
    quote,
}: Props) {
    return (
        <blockquote className="my-16 text-center">
            <p className="text-3xl italic">
                "{quote}"
            </p>
        </blockquote>
    );
}