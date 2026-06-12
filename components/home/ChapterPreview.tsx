type Props = {
    title: string;
    text: string;
};

export default function ChapterPreview({
    title,
    text,
}: Props) {
    return (
        <div className="rounded-3xl border p-8">
            <h3 className="text-3xl mb-4">
                {title}
            </h3>

            <p className="text-gray-600">
                {text}
            </p>
        </div>
    );
}