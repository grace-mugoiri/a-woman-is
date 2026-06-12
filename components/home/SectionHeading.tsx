type Props = {
    title: string;
};

export default function SectionHeading({
    title,
}: Props) {
    return (
        <h2 className="text-5xl mb-10">
            {title}
        </h2>
    );
}